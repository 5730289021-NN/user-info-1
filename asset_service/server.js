var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    User = require('./backend/models/user'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
var portDb = 27017
var linkdb = 'mongodb://127.0.0.1:'+portDb+'/user'
mongoose.connect(linkdb);
console.log(linkdb,'linkdb')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./backend/routes/userRoutes');
routes(app);

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);