var fs = require("fs");

var path = process.argv[2]; 
//console.log(path);

fs.readFile(path,'utf8',clb);

function clb(err,data){
    if(err){
        console.log(err);
        
    }else{
        console.log(data.split('\n').length-1);
    }
}
