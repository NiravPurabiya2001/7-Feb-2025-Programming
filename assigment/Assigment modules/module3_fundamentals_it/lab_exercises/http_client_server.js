// Simple HTTP Client-Server Communication using Node.js
// Run: node http_client_server.js
// This creates a basic HTTP server and simulates a client request.

const http = require('http');

// ─── SERVER ────────────────────────────────────────────────────────────────
const server = http.createServer((req, res) => {
  console.log(`[Server] Received ${req.method} request on ${req.url}`);

  // Set response headers
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  // Build response based on route
  if (req.url === '/' && req.method === 'GET') {
    const responseData = {
      status: 'success',
      message: 'Welcome to the HTTP Server!',
      timestamp: new Date().toISOString()
    };
    res.end(JSON.stringify(responseData));

  } else if (req.url === '/data' && req.method === 'GET') {
    const data = {
      users: [
        { id: 1, name: 'Alice', role: 'Developer' },
        { id: 2, name: 'Bob',   role: 'Designer'  }
      ]
    };
    res.end(JSON.stringify(data));

  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'error', message: '404 Not Found' }));
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`[Server] Listening on http://localhost:${PORT}`);

  // ─── CLIENT (simulated after server starts) ──────────────────────────────
  const options = {
    hostname: 'localhost',
    port: PORT,
    path: '/',
    method: 'GET'
  };

  const clientReq = http.request(options, (res) => {
    let body = '';
    res.on('data', chunk => (body += chunk));
    res.on('end', () => {
      console.log(`[Client] Status Code: ${res.statusCode}`);
      console.log(`[Client] Response: ${body}`);
      server.close(); // Close server after demo
    });
  });

  clientReq.on('error', err => console.error('[Client] Error:', err.message));
  clientReq.end();
});
