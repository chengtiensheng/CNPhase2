//reference: https://reurl.cc/917QLn
var http = require('http'); //load http module
const hostname = 'linux9.csie.ntu.edu.tw';
const port = 9025;
const server = http.createServer((req, res) => { // = function(req, res)
    res.statusCode = 200; // OK
    res.setHeader = ('content-Type', 'text/html');
    res.write(`<h1>Test server</h1>`);
    res.end();
});
server.listen(port, hostname, () => {
    console.log(`The server is listening on http://${hostname}:${port}`);
});