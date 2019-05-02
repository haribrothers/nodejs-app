const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

//router imports
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();

//use bodyparser to parse request
app.use(bodyParser.urlencoded({extended: false}));


//use static files 
app.use(express.static(path.join(__dirname,'public')));

//use the routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//404 - error page
app.use((req, res, next) => {
    // res.status(404).send('<h1>Page not Found</h1>')
    res.status(404).sendFile(path.join(__dirname,'views/404.html'));
});

//init the server
app.listen(3000);