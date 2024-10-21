var fs =require("fs")

fs.appendFile('newfile.txt','hello',function (err){

    if(err) throw err;
    console.log('saved')
});