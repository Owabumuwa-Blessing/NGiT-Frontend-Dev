# Difference between GET and POST methods in Forms

When creating HTML forms, two common methods are used to send data to a server: **GET** and **POST**.

1. GET Method

Purpose: Retrieve data from the server.
How it works: Form data is appended to the URL as query parameters.
Characteristics:
- Data is visible in the URL.
- Limited amount of data can be sent.
- Can be bookmarked or shared easily.
- Mostly used for fetching data without side effects (like search forms).

2. POST Method

Purpose: Send data to the server for processing.
How it works: Form data is included in the HTTP request body, not visible in the URL.
Characteristics:
- Data is not visible in the URL (more secure for sensitive information).
- No restrictions on data size.
- Cannot be bookmarked with the form data.
- Usually used for actions that modify data (like login, registration, or submitting forms).

## Summary Table

| **Feature**       | **GET**                      | **POST**                   |
|-------------------|------------------------------|----------------------------|
| Data location     | URL query string             | Request body               |
| Data visible      | Yes                          | No                         |
| Data length limit | Yes (URL length limit)       | No practical limit         |
| Security          | Less secure                  | More secure                |
| Bookmarkable      | Yes                          | No                         |