![Alt text](image.png)

# HTTP Status Codes Guide

## Introduction

This guide provides an overview of HTTP status codes, their meanings, and their use in web development. HTTP status codes are three-digit numbers returned by web servers to indicate the result of a client's request. They are grouped into different classes, each with its own set of codes. Understanding these codes is essential for troubleshooting and building robust web applications.

## Table of Contents

1. [1xx - Informational]
2. [2xx - Success]
3. [3xx - Redirection]
4. [4xx - Client Error]
5. [5xx - Server Error]

## 1xx - Informational

These status codes indicate that the client's request was received and understood, and further action is required.

- **100 Continue**: The server is requesting the client to continue sending the request body.
- **101 Switching Protocols**: The server has agreed to switch protocols.
- **102 Processing**: The server is processing the request but has not yet completed it.
- **103 Early Hints**: The server returns some response headers before the final HTTP message.

## 2xx - Success

These codes indicate that the client's request was successful.

- **200 OK**: Standard response for successful HTTP requests.
- **201 Created**: The request resulted in the creation of a new resource.
- **202 Accepted**: The request has been accepted for processing but not yet completed.
- **203 Non-Authoritative Information**: The request is successful, but the content has been modified by a proxy.
- **204 No Content**: The server successfully processed the request without returning any content.
- **205 Reset Content**: The server indicates to reinitialize the document view.
- **206 Partial Content**: The server delivers only part of the resource due to a range header.
- **207 Multi-Status**: An XML message with multiple separate response codes.
- **208 Already Reported**: Members of a DAV binding have already been enumerated.
- **226 IM Used**: The server has fulfilled a request, and the response is a representation of the result.

## 3xx - Redirection

These codes indicate that the client needs to take additional action to complete the request.

- **300 Multiple Choices**: Indicates multiple options for the resource.
- **301 Moved Permanently**: Requests should be directed to the given URI.
- **302 Found**: Redirect to another URL (industry practice may contradict this).
- **303 See Other**: The response can be found under another URI using a GET method.
- **304 Not Modified**: The resource has not been modified since the specified version.
- **305 Use Proxy**: The requested resource is available through a proxy.
- **307 Temporary Redirect**: The request should be repeated with another URI.
- **308 Permanent Redirect**: The request should be repeated using another URI.

## 4xx - Client Error

These codes indicate that there was a client error, such as a malformed request.

- **400 Bad Request**: The server cannot process the request due to a client error.
- **401 Unauthorized**: Authentication is required, and it has failed or not been provided.
- **402 Payment Required**: Reserved for future use.
- **403 Forbidden**: The request was valid, but the server refuses action.
- **404 Not Found**: The requested resource could not be found.
- **405 Method Not Allowed**: The request method is not supported for the resource.
- **406 Not Acceptable**: The requested resource can't generate content according to the request's Accept headers.
- **407 Proxy Authentication Required**: The client must authenticate itself with the proxy.
- **408 Request Timeout**: The server timed out waiting for the request.
- **409 Conflict**: Indicates that the request couldn't be processed due to a conflict.
- **410 Gone**: The requested resource is no longer available.
- **411 Length Required**: The request didn't specify its content length.
- **412 Precondition Failed**: The server doesn't meet one of the request's preconditions.
- **413 Payload Too Large**: The request is too large for the server.
- **414 URI Too Long**: The URI provided was too long for the server to process.
- **415 Unsupported Media Type**: The request entity has an unsupported media type.
- **416 Range Not Satisfiable**: The client requested a portion of the file that the server can't supply.
- **417 Expectation Failed**: The server can't meet the requirements of the Expect request-header field.
- **418 I'm a Teapot**: The server refuses to brew coffee with a teapot.
- **421 Misdirected Request**: The request was directed at a server that can't produce a response.
- **422 Unprocessable Entity**: The request was well-formed but had semantic errors.
- **423 Locked**: The resource being accessed is locked.
- **424 Failed Dependency**: The request failed due to a previous request's failure.
- **425 Too Early**: The server is unwilling to risk processing a potentially replayed request.
