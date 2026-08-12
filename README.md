# 🌐 HTTP Status Codes Guide

An interactive, high-performance, developer-focused reference web application for all 63 official HTTP status codes. Features real-time search, category filtering, an obsidian dark UI, code inspector modal with copyable multi-language code snippets, and keyboard shortcuts.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status Codes](https://img.shields.io/badge/status--codes-63%20total-emerald.svg)
![Dark Theme](https://img.shields.io/badge/theme-obsidian%20dark-sky.svg)

---

## ✨ Features

- ⚡ **Real-Time Search**: Search instantly by status code number (e.g. `404`), keyword (e.g. `Teapot`, `Rate limit`), or description text.
- 🎨 **Modern Dark UI/UX**: Built with a sleek obsidian dark theme, glassmorphic headers (`backdrop-filter`), smooth gradients, and color-coded status category badges.
- 🏷️ **Category Filter Tabs**: One-click filtering by category (`All`, `1xx Informational`, `2xx Success`, `3xx Redirection`, `4xx Client Error`, `5xx Server Error`, or `★ Starred`).
- 🔍 **Code Inspector Modal**: Deep dive into status codes with copyable implementation snippets in **cURL**, **JavaScript (`fetch`)**, **Python (`requests`)**, and **Go (`net/http`)**.
- ⌨️ **Keyboard Shortcuts**:
  - Press `/` or `Ctrl+K` / `Cmd+K` to instantly focus the search bar.
  - Press `Esc` to clear search or close the inspect modal.
- ⭐ **Favorites Bookmarking**: Star frequently used status codes; preferences persist in `localStorage`.
- 📱 **Fully Responsive**: Flawlessly adapts across mobile (375px), tablet (768px), and desktop (1440px+) screen sizes.

---

## 🎨 Status Code Category Breakdown

| Category | Class | Accent Color | Count | Description |
| :--- | :--- | :--- | :---: | :--- |
| **1xx** | Informational | Sky Blue (`#38bdf8`) | 4 | Request received, continuing process |
| **2xx** | Success | Emerald Green (`#34d399`) | 10 | Action successfully received, understood, and accepted |
| **3xx** | Redirection | Violet Purple (`#a78bfa`) | 9 | Further action must be taken to complete request |
| **4xx** | Client Error | Amber Orange (`#fb923c`) | 29 | Request contains bad syntax or cannot be fulfilled |
| **5xx** | Server Error | Crimson Rose (`#f87171`) | 11 | Server failed to fulfill an apparently valid request |

---

## 📋 Comprehensive Status Code Reference

### 1xx — Informational
- **100 Continue**: Waiting for the client to emit the body of the request.
- **101 Switching Protocols**: The server has agreed to change protocol.
- **102 Processing**: The server is processing the request, but no response is available yet.
- **103 Early Hints**: The server returns some response headers before final HTTP message.

### 2xx — Success
- **200 OK**: Standard response for successful HTTP requests.
- **201 Created**: The request has been fulfilled, resulting in the creation of a new resource.
- **202 Accepted**: The request has been accepted for processing, but processing is incomplete.
- **203 Non-Authoritative Information**: The request is successful, but content was modified by a proxy.
- **204 No Content**: The server successfully processed the request and returns no content.
- **205 Reset Content**: Server indicates to reinitialize the document view.
- **206 Partial Content**: Server is delivering only part of the resource due to Range header.
- **207 Multi-Status**: Message body contains XML with multiple response codes (WebDAV).
- **208 Already Reported**: Members of a DAV binding have already been enumerated (WebDAV).
- **226 IM Used**: The server has fulfilled a GET request for the resource representation.

### 3xx — Redirection
- **300 Multiple Choices**: Indicates multiple options for the resource.
- **301 Moved Permanently**: This and all future requests should be directed to given URI.
- **302 Found**: Temporary redirect to another URL.
- **303 See Other**: Response can be found under another URI using a GET method.
- **304 Not Modified**: Resource has not been modified since version specified by request headers.
- **305 Use Proxy**: Requested resource available only through a proxy provided in response.
- **306 Switch Proxy**: No longer used. Originally meant subsequent requests should use specified proxy.
- **307 Temporary Redirect**: Repeat request with another URI; future requests should use original URI.
- **308 Permanent Redirect**: Request and all future requests should be repeated using another URI.

### 4xx — Client Error
- **400 Bad Request**: Server cannot process request due to client error.
- **401 Unauthorized**: Authentication required and has failed or not been provided.
- **402 Payment Required**: Reserved for future digital cash/micropayment schemes.
- **403 Forbidden**: Request was valid, but server refuses authorization.
- **404 Not Found**: Requested resource could not be found.
- **405 Method Not Allowed**: Request method (GET, POST, etc.) not supported for resource.
- **406 Not Acceptable**: Resource generates content not acceptable according to Accept headers.
- **407 Proxy Authentication Required**: Client must first authenticate with proxy.
- **408 Request Timeout**: Server timed out waiting for request.
- **409 Conflict**: Request could not be processed due to conflict (e.g. edit conflict).
- **410 Gone**: Resource requested is permanently deleted with no forwarding address.
- **411 Length Required**: Content-Length header missing in request.
- **412 Precondition Failed**: Server does not meet preconditions in request headers.
- **413 Payload Too Large**: Request payload exceeds server size limits.
- **414 URI Too Long**: URI provided was too long for server to process.
- **415 Unsupported Media Type**: Content-Type header format not supported.
- **416 Range Not Satisfiable**: Client requested byte range server cannot supply.
- **417 Expectation Failed**: Server cannot meet requirements of Expect header.
- **418 I'm a teapot 🫖**: Server refuses to brew coffee with a teapot (RFC 2324).
- **421 Misdirected Request**: Request directed at a server unable to produce a response.
- **422 Unprocessable Entity**: Well-formed request with semantic errors (WebDAV / REST).
- **423 Locked**: Target resource is locked for edit/write operations (WebDAV).
- **424 Failed Dependency**: Request failed due to failure of a previous request (WebDAV).
- **425 Too Early**: Server unwilling to risk processing request that might be replayed.
- **426 Upgrade Required**: Client should switch to a different protocol (e.g. TLS/1.0).
- **428 Precondition Required**: Server requires request to be conditional.
- **429 Too Many Requests**: Rate limit exceeded; user sent too many requests in time window.
- **431 Request Header Fields Too Large**: Individual or total HTTP headers too large.
- **451 Unavailable For Legal Reasons**: Access denied due to legal demand or censorship order.

### 5xx — Server Error
- **500 Internal Server Error**: Generic error when server encounters unexpected condition.
- **501 Not Implemented**: Server lacks capability or handler to fulfill request.
- **502 Bad Gateway**: Server acting as proxy received invalid upstream response.
- **503 Service Unavailable**: Server is down for maintenance or overloaded.
- **504 Gateway Timeout**: Upstream server timed out responding to proxy.
- **505 HTTP Version Not Supported**: HTTP protocol version in request unsupported.
- **506 Variant Also Negotiates**: Circular reference in content negotiation loop.
- **507 Insufficient Storage**: Server unable to store representation needed (WebDAV).
- **508 Loop Detected**: Server detected infinite loop while processing request (WebDAV).
- **510 Not Extended**: Mandatory HTTP extension required for request.
- **511 Network Authentication Required**: Client needs to authenticate for network access.

---

## 🛠️ Usage & Local Setup

Simply clone the repository and open `index.html` in any modern web browser or serve via HTTP server:

```bash
# Clone the repository
git clone https://github.com/harindujayakody/http-status-codes.git

# Navigate into the project folder
cd http-status-codes

# Serve using Python http.server (Optional)
python -m http.server 8000
```

Open `http://localhost:8000` in your web browser.

---

## 📄 License

This project is licensed under the [GNU General Public License v3.0](LICENSE).
