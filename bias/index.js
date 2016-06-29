var fs = require('fs')


function handle(content){


container.forEach(function (item, index, array) {
    if(content.indexOf(item)>0){
     console.log(container2[index])
    }
});

}

var container = [];
var container2 = [];

var input = fs.createReadStream('./src' + '/list1.txt');
readLines(input, func);

// console.log(container2)


fs.readFile("./des/song1.txt", 'utf8', function (err, content) {
                  if (err) throw err;
                  handle(content);
                });



function readLines(input, func) {
  var remaining = '';
  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 1);
      func(line);
      index = remaining.indexOf('\n');
    }
 
  });
 
  input.on('end', function() {
    if (remaining.length > 0) {
      func(remaining);
    }
  });
}
 
function func(data) {
  container.push(data.split(":")[0]); 
  container2.push(data.split(":")[3]); 
}
 
