const http = require('node:http');

const findings = [
  { id: 'WEB-001', title: 'Repeated news link text', wcag: '2.4.4', severity: 'Medium', status: 'Needs browser verification' },
  { id: 'WEB-002', title: 'Linked images and text alternatives', wcag: '1.1.1', severity: 'High if confirmed', status: 'Needs browser verification' },
  { id: 'WEB-003', title: 'Navigation landmarks and bypass link', wcag: '2.4.1', severity: 'Low/Medium', status: 'Needs browser verification' },
  { id: 'WEB-004', title: 'Weather iframe accessibility', wcag: '2.1.1 / 4.1.2', severity: 'Medium', status: 'Needs browser verification' },
  { id: 'WEB-005', title: 'Text-size control semantics', wcag: '2.1.1 / 4.1.2', severity: 'Medium', status: 'Needs browser verification' }
];

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.url === '/api/health') {
    res.writeHead(200);
    return res.end(JSON.stringify({ status: 'ok' }));
  }

  if (req.url === '/api/findings') {
    res.writeHead(200);
    return res.end(JSON.stringify({ count: findings.length, findings }));
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: 'Not found' }));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Audit API running at http://localhost:${PORT}`);
});
