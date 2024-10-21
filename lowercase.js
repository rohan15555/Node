var http = require('http');
let lowerCase = require('lower-case');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    res.write(lowerCase("HELLO WORLD!")); 
    res.end();
  }).listen(3005);
  
  console.log("Server is running on http://localhost:3005");