const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  let responseData = { message: 'Hello from Node.js!' };

  try {
    const jsonString = JSON.stringify(responseData);
    response.writeHead(200);
    response.end(jsonString);
  } catch (error) {
    console.error('Error creating JSON response:', error);
    response.writeHead(500);
    response.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});