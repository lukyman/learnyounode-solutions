var fs = require("fs");
var dir = require("./mymodule");
var mypath = process.argv[2]; 
var ext = process.argv[3];

dir(mypath,ext,function(err,files){
   if(err) return err;
   
  
   return files;
})
