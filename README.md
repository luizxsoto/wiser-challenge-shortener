<div align="center">

# Wiser Challenge Shortener ✂️

### Enter a url and have it shortened

![languages](https://img.shields.io/github/languages/count/luizxsoto/wiser-challenge-shortener 'languages')

[Technologies](#rocket-technologies)
&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
[How To Use](#information_source-how-to-use)

</div>

## :rocket: Technologies

- [AdonisV5](https://adonisjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Postgres](https://www.postgresql.org/)
- [VS Code][vc] with [EditorConfig][vceditconfig], [ESLint][vceslint] and [Prettier][vcprettier]

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js >= v14.16.x][nodejs] installed on your computer.

From your command line:

```bash
# Clone this repository
$ git clone git@github.com:luizxsoto/wiser-challenge-shortener.git

# Go into the repository
$ cd wiser-challenge-shortener

# Install dependencies
$ npm i

# Test the app
$ npm run test

# Run the app
$ npm run dev
```

[nodejs]: https://nodejs.org/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vcprettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

---

### - Functional Requirements

- [x] Shorten URL

### - Non-Functional Requirements

- [x] Min length: 5 and Max length: 10
- [x] Only letters and numbers
- [x] Save in database
- [x] Redirect when getting shortened url
- [x] Tests

- Expected behavior:

  ```jsonc
    // request body
    {
      "url": "http://wisereducacao.com"
    }

    // response body
    {
      "new_url": "http://localhost:8081/abc123ab"
    }
  ```

### - Business Rules

- [x] Shortened url expiration date: 60 seconds
