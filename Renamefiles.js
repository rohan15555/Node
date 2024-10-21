var fs =require('fs')

fs.rename('newfile.txt','newfile1.txt',function(err){
    if(err) throw err;
    console.log('File Renamed')
})