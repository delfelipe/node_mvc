var http = require('http');

var server = http.createServer(function(req, res) {
    var category = req.url;
    if(category == "/tecnologia") {
        res.end("<html><body>Portal de Tecnologia</body></html>");
    } else if(category == "/moda") {
        res.end("<html><body>Portal de Moda</body></html>");
    } else if(category == "/beleza") {
        res.end("<html><body>Portal de Beleza</body></html>");
    } else {
        res.end("<html><body>Portal de notícias</body></html>");
    }
});

server.listen(3000);