const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars')
const path = require('path');

const errorController = require('./controllers/error')


//router imports
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();

//using ejs as template-engine
app.set('view engine', 'ejs');

//set the views folder
app.set('views', 'views');

//use bodyparser to parse request
app.use(bodyParser.urlencoded({extended: false}));

//use static files 
app.use(express.static(path.join(__dirname,'public')));

//use the routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//404 - error page
app.use(errorController.get404Page);

//init the server
app.listen(3000);