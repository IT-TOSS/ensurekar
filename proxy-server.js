const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({ target: 'http://13.218.249.121:3000', changeOrigin: true }));

app.listen(80, () => {
  console.log('Proxy server running on port 80');
});
