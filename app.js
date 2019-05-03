const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars')
const path = require('path');

//router imports
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();

//using pug as template-engine
// app.set('view engine', 'pug');

//using handlebar as template-engine with layout
// app.engine('hbs', expressHbs(
//     {
//         layoutsDir: 'views/layouts/', 
//         defaultLayout:'main-layout', 
//         extname:'hbs'
//     })
// );
// app.set('view engine', 'hbs');

//using ejs as template-engine
app.set('view engine', 'ejs');

//set the views folder
app.set('views', 'views');

//use bodyparser to parse request
app.use(bodyParser.urlencoded({extended: false}));


//use static files 
app.use(express.static(path.join(__dirname,'public')));

//use the routes
app.use('/admin', adminData.routes);
app.use(shopRoutes);

//404 - error page
app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname,'views/404.html'));
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

//init the server
app.listen(3000);