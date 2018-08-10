const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require('express-handlebars');
var methodOverride = require('method-override');

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/',routes);

var PORT = 8080;
app.listen(PORT);