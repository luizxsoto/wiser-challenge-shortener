import { MAX_LENGTH, MIN_LENGTH, POSSIBLE_STRING } from './Constants/Encryptor'

class EncryptorProvider {
  public static execute(): string {
    const randomLength = Math.floor(Math.random() * (MAX_LENGTH - MIN_LENGTH + 1)) + MIN_LENGTH

    let text = ''
    while (text.length < randomLength)
      text += POSSIBLE_STRING.charAt(Math.floor(Math.random() * POSSIBLE_STRING.length))

    return text
  }
}

export default EncryptorProvider
