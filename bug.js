const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Uncommon error: Unexpected token '}' in JSON at position 34
//This error occurs when the server tries to parse invalid JSON data sent in a request. 
//If response.end() is given invalid JSON, it throws this error.  The error is not immediately obvious as it's related to response handling, not a syntax error within the server code itself.