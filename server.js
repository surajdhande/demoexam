
var express = require('express');
var app = express();
var path=require("path");
var fs=require("fs");
var bp = require('body-parser');

//server configuration
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function (req, res) {
   res.sendFile(path.join(___dirname + '/index.html'));
});
app.use(exp.static('public'));   
app.use(bp.urlencoded({extended: false})); 
 

app.get('/hello', function (req, res) {
  console.log("CAlling rest api");
  var person={firstName:'Ravi',lastName:'Tambade',age:47};
  res.send(person);
});

 
var server = app.listen(4141, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at 4141");
})