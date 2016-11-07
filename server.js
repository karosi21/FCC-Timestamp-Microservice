var express = require('express');
var fs = require('fs')
var path = require('path')
var moment = require('moment')
var app = express();

app.set('port',process.env.PORT || 3000)
app.use(express.static(path.resolve(__dirname,'public')));
app.get("/", (req,res) => {
	res.end();
}).listen(app.get('port'), () => {
	console.log(`Server running on port ${app.get('port')}`);
});