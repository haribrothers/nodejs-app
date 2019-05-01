const fs = require('fs');

const requestHandler = (req,res) => {
    const url = req.url;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
        res.write('<html>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            //Blocking code
            // fs.writeFileSync('message.txt', message);
            //Non-blocking code
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
        // res.statusCode = 302;
        // res.setHeader('Location','/');
        // return res.end();
    }
    res.write('<html>');
    res.write('<head><title>Nodejs Complete</title></head>');
    res.write('<body><h1>Welcome to the sample nodejs application</h1></body>');
    res.write('<html>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;

// multiple exports 3 ways

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some Text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some Text';

// exports.handler = requestHandler;
// exports.someText = 'Some Text';