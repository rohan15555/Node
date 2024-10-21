var http =require('http')
var dt=require('./firstmodules')

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    res.write("The data and time are currently:"+dt.myDateTime())
    res.end()

}).listen(3000);