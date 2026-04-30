const http = require('http');

module.exports = (req, res) => {
    const options = {
        hostname: 'Faz.jojeyenaz.ir',
        port: 8040,
        path: req.url,
        method: req.method,
        headers: req.headers
    };

    const proxy = http.request(options, (targetRes) => {
        res.writeHead(targetRes.statusCode, targetRes.headers);
        targetRes.pipe(res);
    });

    req.pipe(proxy);

    proxy.on('error', (e) => {
        res.status(500).end();
    });
};
