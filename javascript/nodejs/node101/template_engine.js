var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    //res.send('This is the homepage');
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res) {
    //res.send('This is the contact page');
    res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req, res) {
    var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});


app.listen(3000);
