var fs = require("fs");

var mypath = process.argv[2]; 
var ext = process.argv[3];

var path = require("path");

var mypath = process.argv[2]; 
var ext = process.argv[3];

fs.readdir(mypath,function(err,list){
    if(err) console.log(err);
        
        list.forEach(function(files){
         
    
    
            if(path.extname(files)==='.'+ext){
                console.log(files);
            }

        })
        
})