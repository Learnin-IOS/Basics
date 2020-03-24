const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url==='/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form><input type= "text"><button type="Submit"></button></form></body>');
        res.write('</html>');
        res.end();
    }
    //process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1> Jambo Hapa form my node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
