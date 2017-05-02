const http = require('http');
const https = require('https');
const url = require('url');

// 获取数据
function getData(query, handler) {
  var data = '';
  var url = query.url.replace('[@]', '&');
  https.get(url, function (res) {
    res.on('data', function (d) {
      data += d;
    }).on('end', function () {
      handler(data);
    });
  }).on('error', function (e) {
    console.log("Got error: " + e.message);
  }).end();
}


// 代理服务器
var server = http.createServer(function (req, res) {
  //console.log(res);
  var query = url.parse(req.url, true).query;
  getData(query, function(data) {
    res.end(`${query.callback}(${data})`);
  });
}).listen(8888);
console.log('The server listening at 8888')