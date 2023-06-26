//use http module 
const http = require('http');

//create server 
http.createServer((req, res) => {
    res.writeHead(200, {'content-type' : 'text/html'}); //headers (! important)
    switch(req.url){
        case '/' :
            res.write('hello world');
            res.end();
        case '/about':
            res.write('about page');
            res.end();
    }
}).listen('5000');

console.log('server is up ..........')