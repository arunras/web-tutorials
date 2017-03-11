var fs = require('fs');

//var readMe = fs.readFileSync('readme', 'utf8');
//console.log(readMe);
//fs.writeFileSync('writeme', readMe);

fs.readFile('readme', 'utf8', function (err, data) {
    //console.log(data);
    fs.writeFile('writeme', data, function(){});
});

