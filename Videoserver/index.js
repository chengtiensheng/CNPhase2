const HLSServer = require('hls-server')
const http = require('http')
var fs = require('fs') // read file
var url = require('url') // parse url

const hostname = 'linux12.csie.ntu.edu.tw';
const port = 9017;
const server = http.createServer((req, res) => {
    var parseObj = url.parse(req.url, true)
    var pathname = parseObj.pathname
    console.log(pathname)
    if(pathname === '/'){
        fs.readFile('./index.html', function(err, data){
            if(err){
                return res.end('Loading index page failed')
            }
            res.end(data)
        })
    }
})
const hls = new HLSServer(server, {
    path: '/streams',
    dir: 'source-m3u8'
})
server.listen(port, hostname, () => {
    console.log(`The server is listening on http://${hostname}:${port}`);
});

