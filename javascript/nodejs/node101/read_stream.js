var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/big.txt', 'utf8');
var count = 0;
myReadStream.on('data', function(chunk) {
    console.log(`new chunk recieved [${count}]`);
    console.log(chunk);
    count++;
});


var Me = {
    'name' : 'Arun Rasmey',
    'google': 'Software Engineer',
    'email': 'arunrax@gmail.com',
    'phone': '(551) 900-1110' 
}
