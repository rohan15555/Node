var fs =require('fs')

fs.unlink('myfile2.txt',function(err){
    if (err) throw err
    console.log('file deleted')
});