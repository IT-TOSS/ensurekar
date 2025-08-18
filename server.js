// const https = require('https');
// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const next = require('next');

// const portHttps = 443;
// const portHttp = 80;
// const hostname = 'ensurekar.com';

// const app = next({ dev: false });
// const handle = app.getRequestHandler();

// const httpsOptions = {
//   pfx: fs.readFileSync(path.join(__dirname, 'certificate.crt')),
//   passphrase: 'ensurekar',
// };

// app.prepare().then(() => {
//   // HTTPS server
//   https.createServer(httpsOptions, (req, res) => {
//     handle(req, res);
//   }).listen(portHttps, () => {
//     console.log(`✅ HTTPS server ready at https://${hostname}`);
//   });

//   // Optional HTTP to HTTPS redirect
//   http.createServer((req, res) => {
//     res.writeHead(301, {
//       Location: `https://${req.headers.host}${req.url}`,
//     });
//     res.end();
//   }).listen(portHttp, () => {
//     console.log('ℹ️  HTTP redirect running on port 80');
//   });
// });

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const next = require('next');

const portHttps = 443;
const portHttp = 80;
const hostname = 'ensurekar.com'; // change if needed

const app = next({ dev: false });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, 'private.key')),       // Private key
  cert: fs.readFileSync(path.join(__dirname, 'certificate.crt')),  // Certificate
  ca: fs.readFileSync(path.join(__dirname, 'ca_bundle.crt')),      // CA Bundle (from ZeroSSL)
};

app.prepare().then(() => {
  // HTTPS server
  https.createServer(httpsOptions, (req, res) => {
    handle(req, res);
  }).listen(portHttps, () => {
    console.log(`✅ Next.js HTTPS server ready at https://${hostname}`);
  });

  // HTTP → HTTPS redirect
  http.createServer((req, res) => {
    res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
    res.end();
  }).listen(portHttp, () => {
    console.log('ℹ️ HTTP redirect running on port 80');
  });
});
