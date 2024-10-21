var fs=require('fs')

fs.writeFile('newfile.txt','hello content!',function (err){
    if(err) throw err;
    console.log('Saved')
})