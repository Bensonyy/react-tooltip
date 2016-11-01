var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var express = require('express')
var app = new(express)()
var port = 9000

var compiler = webpack(config)

// attach to the compiler & the server
app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath    //public path should be the same with webpack config
}))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
	res.sendFile(__dirname + '/index.html')
})

//加载静态资源
//app.use(express.static(path.join(__dirname, 'lib/ctrip/')));
app.use(express.static(__dirname));

app.listen(port, function(error) {
	if (error) {
		console.error(error)
	} else {
		console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
	}
})