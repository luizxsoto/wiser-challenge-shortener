- Functional Requirements
- [x] Shorten URL

- Non-Functional Requirements
- [x] Min length: 5 and Max length: 10
- [x] Only letters and numbers
- [x] Save in database
- [x] Redirect when getting shortened url

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

- Business Rules
- [x] Shortened url expiration date: 60 seconds
