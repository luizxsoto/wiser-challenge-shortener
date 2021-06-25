<div align="center">

# Wiser Challenge Shortener ✂️

### Enter a url and have it shortened

![languages](https://img.shields.io/github/languages/count/luizxsoto/wiser-challenge-shortener 'languages')

[Technologies](#rocket-technologies)
&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
[How To Use](#information_source-how-to-use)

</div>

## :rocket: Tecnologias

- [AdonisV5](https://adonisjs.com/)
- [VS Code][vc] with [EditorConfig][vceditconfig], [ESLint][vceslint] and [Prettier][vcprettier]

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js >= v14.16.x][nodejs] and [Yarn v1.x][yarn] installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone git@github.com:luizxsoto/wiser-challenge-shortener.git

# Go into the repository
$ cd wiser-challenge-shortener

# Install dependencies
$ npm i

# Run the app
$ node ace serve --watch
```

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
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
- [ ] Tests

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
