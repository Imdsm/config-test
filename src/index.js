var http = require('http');

http.createServer(function(req, res) {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain' });
        res.end('EXAMPLE_CONFIG_VAR: ' + process.env.EXAMPLE_CONFIG_VAR);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain' });
        res.end('Not found');
    }
}).listen(process.env.PORT || 8000);
