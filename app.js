(function() {

	var koa = require('koa');
	var app = module.exports = koa();

	var port = process.env.PORT || 3000;

	app.use(function *(){
	  this.body = 'Port: ' + port;
	});

	if (!module.parent) app.listen(port);

	console.log('* listen on port ' + port)

}());

