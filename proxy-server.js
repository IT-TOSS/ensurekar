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

// Proxy all requests to Next.js app (running on port 3000)
app.use(
  '/',
  createProxyMiddleware({
    target: 'http://127.0.0.1:3000', 
    changeOrigin: true,
  })
);

// SSL options (use your ZeroSSL files)
const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, 'private.key')),
  cert: fs.readFileSync(path.join(__dirname, 'certificate.crt')),
  ca: fs.readFileSync(path.join(__dirname, 'ca_bundle.crt')),
};

// Start HTTPS proxy server
https.createServer(httpsOptions, app).listen(443, () => {
  console.log('✅ Proxy server running on HTTPS port 443');
});

// HTTP → HTTPS redirect
http.createServer((req, res) => {
  res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
  res.end();
}).listen(80, () => {
  console.log('ℹ️ Redirecting all HTTP traffic to HTTPS');
});
