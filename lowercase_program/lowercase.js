var http = require('http');
var lowerCase = require('lower-case').lowerCase; // Make sure to use 'var' here

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    res.write(lowerCase("HELLO WORLD!"));  // This should work if the package is installed correctly
    res.end();
}).listen(3005);

console.log("Server is running on http://localhost:3005");
