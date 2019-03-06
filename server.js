var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
var port = 8001;
app.listen(port);
console.log('Server is running on ' + port);