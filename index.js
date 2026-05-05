const http = require('http');

const port = process.env.PORT || 3000;

const html = `
<!DOCTYPE html>
<html>
<head>
<title>Moski Demo</title>
<style>
body {
    background: #0a0a0a;
    color: #00ff88;
    font-family: monospace;
    text-align: center;
    padding-top: 100px;
}
button {
    padding: 10px;
    margin-top: 20px;
    background: black;
    color: #00ff88;
    border: 1px solid #00ff88;
}
</style>
</head>
<body>

<h1>🚀 Deployed with Moski OS</h1>
<p>This app went live in seconds</p>

<button onclick="alert('Moski OS is working!')">
Test Interaction
</button>

</body>
</html>
`;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
}).listen(port, () => {
    console.log("Server running on " + port);
});
// update
