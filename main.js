var apiai = require('apiai');
 
var app = apiai("f0d449afa86d439fbf45e9307f15db2f");
 
var options = {    
    // proxyHost: '192.168.7.253',
    // proxyPort: 8080,
    sessionId: "132131213"
};

var request = app.textRequest('Ola', options);

 
request.on('response', function(response) {
    console.log(response);
});
 
request.on('error', function(error) {
    console.log(error);
});
 
request.end();
