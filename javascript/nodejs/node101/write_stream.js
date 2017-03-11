var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/big.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
var count = 0;

myReadStream.on('data', function(chunk) {
    console.log(`new chunk recieved [${count}]`);
    myWriteStream.write(chunk);
    //console.log(chunk);
    count++;

});

