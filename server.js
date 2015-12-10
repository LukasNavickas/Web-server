var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var middleware = require('./middleware');


// app.get('/', function(req, res) { // get request to the browser. Dont' need, because requested a static page later on
// 	res.send('Hello Express');
// });

app.use(middleware.Logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('Express server started on port ' + PORT + '!');
}); // Port 3000 in my computer
