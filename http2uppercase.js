var http  = require("http");
var strm = require("through2-map");

var port = process.argv[2];


http.createServer(function(request,response){
    console.log(request);
 
    if(request.method==='POST'){
        request.pipe(strm(function(data){
            return data.toString().toUpperCase();
        })).pipe(response);
    }

},port);