    var fs = require("fs");
    var path = require("path");
        
    var mypath = process.argv[2]; 
    var ext = process.argv[3];
module.exports=function(mypath,ext,clb){
  fs.readdir(mypath,function(err,data){
            if(err) return clb(err,null);
                
               var all=[];
                data.forEach(function(files){

          
                    if(path.extname(files)==='.'+ext){
                        console.log(files);
                        all.push(files);
                    }
        
                });
                
        
        return clb(null,all);
  })
        
        
        /*fs.readdir(mypath,function(err,list){
            if(err) return (err);
                
                list.forEach(function(files){

            
                    if(path.extname(files)==='.'+ext){
                        console.log(files);
                    }
        
                })
                
                
               
     })*/

}