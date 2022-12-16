var http = require('http'); // load http module
var fs = require('fs'); // read file
var url = require('url') // parse url
var template = require('art-template')

const hostname = 'linux12.csie.ntu.edu.tw';
const port = 9015;

const server = http.createServer((req, res) => { //function(req, res)
  var parseObj = url.parse(req.url, true)
  var pathname = parseObj.pathname
  if(pathname === '/'){
    fs.readFile('./index.html', function(err, data){
      res.statusCode = 200
      if(err){
          return res.end('Loading index page failed')
      }
      res.end(data)
    })
  }
  else {
    res.statusCode = 404
    res.end()
  }
});
server.listen(port, hostname, () => {
  console.log(`The server is listening on http://${hostname}:${port}`);
});
