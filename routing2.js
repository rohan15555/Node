const http= require('http')
const url=require('url')

const port=3006

const server=http.createServer(function(req,res){

    const {pathname}=url.parse(req.url)

    res.writeHead(200,{'contant-type':'text/plain'})

    if(pathname==='/'){
        res.end('hello,new')
    }

})