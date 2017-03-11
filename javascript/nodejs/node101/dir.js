var fs = require('fs');

//fs.unlink('writeme');

// Make directory and write a file to put in that dir
/*
fs.mkdir('ABC', function() {
    fs.readFile('readme', 'utf8', function (err, data){
        fs.writeFile('./ABC/writeme', data);   
    });
});
*/
fs.unlink('./ABC/writeme', function(){
    fs.rmdir('ABC');
});
