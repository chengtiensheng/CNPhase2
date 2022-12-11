//reference : https://ycjhuo.gitlab.io/blogs/NodeJS-Build-Bulletins.html#app-js
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
    // 用 url.parse 將路徑解析為對象；第二個參數是將查詢的字串轉為對象
    // 在讀取首頁時，parseObj 為：
    // Url { protocol: null, slashes: null, auth: null, host: null, port: null, hostname: null, hash: null, search: null, query: [Object: null prototype] {}, pathname: '/', path: '/', href: '/' }

    // 在 Post 頁，Submit 後 parseObj 為：
    // Url { protocol: null, slashes: null, auth: null, host: null, port: null, hostname: null, hash: null, search: '?name=Leon&message=Say+something', query: [Object: null prototype] { name: 'Leon', message: 'Say something' }, pathname: '/submit', path: '/submit?name=Leon&message=Say+something', href: '/submit?name=Leon&message=Say+something' }

    // 可看出不同的地方為：search, query, pathname, path, href，而等等我們就要用這個 query 來取得我們 submit 的值

    // 擷取網址列的路徑 (會忽略 ? 之後的內容)
    // eg. http://localhost:3000/post?name=Leon&message=Say+something
    // 只會抓到 /post
    
    if (pathname === '/') { // Homepage
        // data = ./views/index.html
        fs.readFile('./views/index.html', function (err, data) {
          if (err) {
            return res.end('Loading index page failed.')
          }
          // 因為 data 是二進制，所以須轉為 string
          var htmlStr = template.render(data.toString(), { comments: comments })
          res.end(htmlStr)
        })
      }
      else if(pathname === '/post'){ // post comment pages
        fs.readFile('./views/post.html', function (err, data) {
          if (err) {
            return res.end('Loading post page failed.')
          }
          res.end(data)
        })
      }

      else if(pathname === '/submit'){ // page after clicking submit
        var comment = parseObj.query //{name : 'name', Message : 'say something'}

        var today = new Date(); // get date
        //parse date
        var date = today.getFullYear() + '/' + (today.getMonth() + 1 ) + '/' + (today.getDate()<10? '0':'') + today.getDate(); 
        var time = today.getHours() + ":" + (today.getMinutes()<10? '0':'') + today.getMinutes() + ":" + (today.getSeconds()<10? '0':'') + today.getSeconds();
        var dateTime = date + ' ' + time;

        comment.dateTime = dateTime 
        comments.unshift(comment) // new comment 在上面

        res.statusCode = 302
        res.setHeader('Location','/') //back to homepage
        res.end()
      }
      else { //404 not found 
        fs.readFile('./views/404.html', function (err, data) {
          if (err) {
            return res.end('404 Not Found.')
          }
          res.end(data)
        })
      }
});
server.listen(port, hostname, () => {
    console.log(`The server is listening on http://${hostname}:${port}`);
});
