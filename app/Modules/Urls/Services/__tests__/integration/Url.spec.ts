import test from 'japa'
import supertest from 'supertest'

import { SECONDS_TO_EXPIRE, EXPIRES_URL_TIME } from 'App/Modules/Urls/Constants/Url'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Url', () => {
  let shortenedUrl = null
  const url = 'http://wisereducacao.com'
  const payload = {
    data: [
      {
        url,
      },
    ],
  }

  async function sleepForExpire() {
    console.log('Sleep for expire', { SECONDS_TO_EXPIRE })
    const multiplayer = 100 / SECONDS_TO_EXPIRE

    function sleep(ms = 1000) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    }

    for (let count = 0; count <= SECONDS_TO_EXPIRE; count++) {
      const dots = '.'.repeat(count)
      const left = SECONDS_TO_EXPIRE - count
      const empty = ' '.repeat(left)

      process.stdout.write(`\r[${dots}${empty}] ${Math.round(count * multiplayer)}%`)

      await sleep()
    }
  }

  test('ensure that shortened url was created', async (assert) => {
    const { body } = await supertest(BASE_URL).post('/urls').send(payload).expect(207)

    shortenedUrl = body?.data?.[0]?.register?.new_url

    assert.exists(shortenedUrl)
    assert.equal(body?.data?.[0]?.status, 200)
  })

  test('ensure that shortened url was shown and redirected to it', async (assert) => {
    const { headers } = await supertest(BASE_URL).get(`/urls/${shortenedUrl}`).expect(302)

    assert.equal(headers?.location, url)
  })

  test('ensure that shortened url must be unique', async (assert) => {
    const { body } = await supertest(BASE_URL).post('/urls').send(payload).expect(207)

    assert.equal(body?.data?.[0]?.status, 400)
    assert.equal(body?.data?.[0]?.error?.validations?.[0]?.rule, 'compoundUnique')
  })

  test('ensure that shortened url was expired', async (assert) => {
    await sleepForExpire()

    const { body } = await supertest(BASE_URL).get(`/urls/${shortenedUrl}`).expect(400)

    assert.equal(body?.validations?.[0]?.rule, 'compoundExists')
  }).timeout(EXPIRES_URL_TIME + 2000)
})
