//run : node index.js

var http = require('http'); // load http module
var fs = require('fs'); // read file
var url = require('url') // parse url
var template = require('art-template')
// test command
var comments = [
    {
      name: 'Test 1',
      message: 'Hello',
      dateTime: '2022/12/04 13:14:00'
    }
]

const hostname = 'linux12.csie.ntu.edu.tw';
const port = 9016;
const server = http.createServer((req, res) => { //function(req, res)
    var parseObj = url.parse(req.url, true)
    var pathname = parseObj.pathname
    console.log(pathname)
    
    if (pathname === '/') { 
        fs.readFile('./views/index.html', function (err, data) {
          if (err) {
            return res.end('Loading index page failed.')
          }
          var htmlStr = template.render(data.toString(), { comments: comments })
          res.end(htmlStr)
        })
      }
      else if(pathname === '/post'){
        fs.readFile('./views/post.html', function (err, data) {
          if (err) {
            return res.end('Loading post page failed.')
          }
          res.end(data)
        })
      }

      else if(pathname === '/submit'){ 
        var comment = parseObj.query 

        var today = new Date(); 
        var date = today.getFullYear() + '/' + (today.getMonth() + 1 ) + '/' + (today.getDate()<10? '0':'') + today.getDate(); 
        var time = today.getHours() + ":" + (today.getMinutes()<10? '0':'') + today.getMinutes() + ":" + (today.getSeconds()<10? '0':'') + today.getSeconds();
        var dateTime = date + ' ' + time;

        comment.dateTime = dateTime 
        comments.unshift(comment) 

        res.statusCode = 302
        res.setHeader('Location','/') 
        res.end()
      }
      else { //404 not found 
        res.statusCode = 404
        res.end()
      }
});
server.listen(port, hostname, () => {
    console.log(`The server is listening on http://${hostname}:${port}`);
});