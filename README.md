# Node.js Unexpected Token '}' Error

This repository demonstrates a subtle error in Node.js where an 'Unexpected token'}' error occurs during JSON response handling.  The problem isn't a syntax error in the JSON itself, but rather how the JSON data is prepared before being sent in the response. 

## Bug
The `bug.js` file contains a server that attempts to send a JSON response. Due to a potential flaw in data preparation (not shown in this simplified example), the server might send malformed JSON, leading to the 'Unexpected token'}' error in the client trying to parse it.

## Solution
The `bugSolution.js` file shows how to prevent the error by rigorously validating and constructing the JSON data before sending the response.  Appropriate error handling is also included.