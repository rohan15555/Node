var http = require('http');
let upperCase = require('upper-case-string'); // Import upper-case-string

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  res.write(upperCase("Hello World!")); // Convert to uppercase
  res.end();
}).listen(8080);

console.log("Server is running on http://localhost:8080");
