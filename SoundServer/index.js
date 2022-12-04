const HLSServer = require('hls-server')
const http = require('http')

const hostname = 'linux9.csie.ntu.edu.tw';
const port = 9020;
const server = http.createServer((req, res) => {
    
})
const hls = new HLSServer(server, {
    path: '/streams',
    dir: 'source-m3u8'
})
server.listen(port, hostname, () => {
    console.log(`The server is listening on http://${hostname}:${port}`);
});