// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// const app = express();

// app.use('/', createProxyMiddleware({ target: 'http://13.218.249.121:3000', changeOrigin: true }));

// app.listen(80, () => {
//   console.log('Proxy server running on port 80');
// });
//----------------------

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const app = express();

app.use(
  '/',
  createProxyMiddleware({
    target: 'http://127.0.0.1:3000',
    changeOrigin: true,
    ws: true,
  })
);

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, 'ensurekar.key')),
  cert: fs.readFileSync(path.join(__dirname, 'certificate.crt')),
  ca: fs.readFileSync(path.join(__dirname, 'ca_bundle.crt')),
};

https.createServer(httpsOptions, app).listen(443, () => {
  console.log('✅ HTTPS Proxy running on port 443');
});

http.createServer((req, res) => {
  res.writeHead(301, {
    Location: `https://${req.headers.host}${req.url}`,
  });
  res.end();
}).listen(80, () => {
  console.log('ℹ️ HTTP → HTTPS redirect enabled');
});
