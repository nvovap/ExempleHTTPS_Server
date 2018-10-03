var express = require('express')

var app = express();

const https = require('https');
var fs = require('fs');


var options = {
  key: fs.readFileSync('certificates/server-key.pem'),
  cert: fs.readFileSync('certificates/server-cert.pem'),
  // requestCert: true,
  // ca: [fs.readFileSync('certificates/ca_bundle.crt')]
};


/* GET users listing. */
app.get('/', function(req, res) {
  res.send('respond with a resource \n');
});


//================ Start SERVER ================  
// app.listen(process.env.PORT || 3443, function(){
// 	console.log('Server running on port '+(process.env.PORT || 3443)+'.');
// 	console.log('-----------------------------------');
// })

app.listen(process.env.PORT || 3400);


https.createServer(options, app).listen(process.env.PORT || 3443, function(){
	console.log('Server running on port '+(process.env.PORT || 3443)+'.');
	console.log('-----------------------------------');
})
