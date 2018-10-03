const https = require('https');

var fs = require('fs');

const options = {
  hostname: 'localhost',
  port: 3443,
  path: '/',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': '',
  },
  ca: [ fs.readFileSync('certificates/server-cert.pem') ]
};

const req = https.request(options, (res) => {
  // console.log('statusCode:', res.statusCode);
  // console.log('headers:', res.headers);

  res.on('data', (d) => {
    //process.stdout.write(d);
    console.log(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});

req.end();


// https.get({ host: 'localhost:3443', path: '/' }, function (res) {
//   console.log('headers:', res.headers);
// });


// https.get({ host: 'localhost', port: 3443, path: '/' }, (res) => {
//   console.log('statusCode:', res.statusCode);
//   console.log('headers:', res.headers);

//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });

// }).on('error', (e) => {
//   console.error(e);
// });