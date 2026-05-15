# Module 3 - Lab Exercises

## 1. Hello World in Two Languages
**JavaScript:**
```javascript
console.log("Hello World");
```
**Python:**
```python
print("Hello World")
```
*Comparison:* Python doesn't require semicolons or parentheses around arguments in older versions (though it does in Python 3), whereas JS uses `console.log`. Both are clean and simple high-level languages.

## 2. Diagram of Data Transmission
Client (Browser) -> HTTP Request -> Internet Router -> ISP -> Web Server -> Processes Request -> HTTP Response -> ISP -> Router -> Client.

## 3. Simple HTTP Client-Server Communication
This can be demonstrated in Node.js:
```javascript
// Server
const http = require('http');
http.createServer((req, res) => {
  res.write('Hello from Server');
  res.end();
}).listen(8080);

// Client (Fetch in Browser)
fetch('http://localhost:8080').then(res => res.text()).then(console.log);
```

## 4. Internet Connections Pros and Cons
- **Broadband (Cable):** Pros - widely available, decent speeds. Cons - slows down during peak hours.
- **Fiber-optic:** Pros - extremely fast, reliable. Cons - expensive, not available everywhere.
- **Satellite:** Pros - available in remote areas. Cons - high latency, affected by weather.

## 5. Curl HTTP Simulation
```bash
curl -X GET https://jsonplaceholder.typicode.com/posts/1
```

## 6. Application Security Vulnerabilities
1. **SQL Injection:** Hackers inject malicious SQL statements. Solution: Use prepared statements or ORMs.
2. **Cross-Site Scripting (XSS):** Malicious scripts are injected into web pages. Solution: Sanitize user input.
3. **Cross-Site Request Forgery (CSRF):** Tricks user into submitting malicious requests. Solution: Use anti-CSRF tokens.

## 7. App Classification
1. Chrome - Application Software
2. Windows 11 - System Software
3. VS Code - Application Software
4. macOS - System Software
5. Spotify - Application Software

## 8. Three-Tier Architecture Diagram
Presentation Layer (React JS UI) <--> Business Logic Layer (Node.js API) <--> Data Access Layer (MongoDB Database)

## 9. Software Environments
- **Development:** Where code is written on the developer's local machine.
- **Testing:** A server matching production where QA tests the code.
- **Production:** The live server where real users interact with the application.

## 10. Requirement Specification (Library System)
- Users must be able to search for books by title or author.
- Admin must be able to add, update, and remove books.
- Users can borrow a maximum of 3 books for 14 days.

## 11. Test Cases for Calculator
- **Test 1:** Input: 2 + 2. Expected: 4.
- **Test 2:** Input: 5 - 3. Expected: 2.
- **Test 3:** Input: 10 / 0. Expected: "Error: Divide by zero".

## 12. Online Registration Flowchart Logic
Start -> User enters details -> Validate details -> If invalid, show error and return -> If valid, save to DB -> Send confirmation email -> End.
