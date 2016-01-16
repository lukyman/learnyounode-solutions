

/*var input = process.argv;

var sum=0;
 
 for (var i = 2; i < input.length; i++) {
     var x = (+input[i]);
     
     sum= sum+x;
 }
console.log(sum); */

var fs = require("fs");
var path= process.argv[2];
var buf=fs.readFileSync(path,'utf8').split('\n').length-1;
console.log(buf);

