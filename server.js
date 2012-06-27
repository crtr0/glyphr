var http = require('http'),
    url = require('url'),
    unitranscode = require('./unitranscode');

var server = http.createServer(function (request, response) {
  console.log(request.url);
  response.writeHead(200, {"Content-Type": "application/json;charset=UTF-8"});
  var word = url.parse(request.url, true).query.word;
  console.log(word);
  var result = {input: word, output: unitranscode(word) };
  response.end(JSON.stringify(result));
});

server.listen(process.env.PORT || 3000);
