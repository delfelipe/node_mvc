var app = require('./config/server');

var routeHome = require('./app/routes/home')(app);
var routeNoticias = require('./app/routes/noticias')(app);
var routeAddNoticia = require('./app/routes/add_noticias')(app);

app.listen(3000, function(){
    console.log('Server ON');
});