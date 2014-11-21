var http = require('http');

http.createServer(function(req, res) {
    if (req.url === '/') {
        // do test
        res.writeHead(200, {'Content-Type': 'text/plain' });
        res.end('Config test');
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain' });
        res.end('Not found');
    }
}).listen(process.env.PORT || 8000);
