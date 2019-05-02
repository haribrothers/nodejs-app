const http = require('http');

const express = require('express');
const bodyParser = require('body-parser')
const app = express();


// using middleware function or libraries
// app.use((req, res, next) => {
//     console.log('Iam in middleware');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Iam in next middleware')
//     res.send('<h1>Helloo from Express</h1>');
// });

//use bodyparser to parse request
app.use(bodyParser.urlencoded({extended: true}));

//route
app.use('/',(req, res, next) => {
    console.log('This always runs');
    next();
});

// app.use('/add-product',(req, res, next) => {
app.get('/add-product',(req, res, next) => {
    console.log('Iam in "/add-product" route')
    // res.send('<h1>Welcome to "Add Product" page</h1>');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>');
});

// app.use('/product',(req,res,next) => {
app.post('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');

});

app.use('/',(req, res, next) => {
    console.log('Iam in "/" route')
    res.send('<h1>Helloo from Express</h1>');
});



// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);