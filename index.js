const http = require('http');
const path = require('path');
const express = require('express');
var app = express();
app.use(express.static(path.join(__dirname, 'html')));

var server = http.createServer(app);

var port = process.env.PORT || 4567;
console.log(port)
server.listen(port, () => {
    console.log('FHIR / CERNER app running on *:' + port);
});