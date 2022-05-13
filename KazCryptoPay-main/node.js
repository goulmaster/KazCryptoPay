const https = require('https');

var options = {
  "method": "GET",
  "hostname": "rest.coinapi.io",
  "path": "/v1/assets",
  "headers": {'X-CoinAPI-Key': '73034021-THIS-IS-SAMPLE-KEY'}
};

var request = https.request(options, function (response) {
  var chunks = [];
  response.on("data", function (chunk) {
    chunks.push(chunk);
  });
});

request.end();