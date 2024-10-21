const http =require('http')
const url =require ('url')

const port =3003;

const server = http.createServer(function(req,res){
    const {pathname} =url.parse(req.url)

    
    res.writeHead(200,{'contant-Type':'text/plain'})

    if (pathname ==='/'){
        res.end('hello,world')
    }else if (pathname==='/about'){
        res.end('About page')        
    }else if (pathname==='/contact'){
        res.end('contact page')
    }else {
        res.statusCode = 404
        res.end('page not found')
    }
})
server.listen(port,()=>{
    console.log('server is running at 3003')
})