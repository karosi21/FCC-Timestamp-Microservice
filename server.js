var express = require('express');
var fs = require('fs')
var path = require('path')
var moment = require('moment')
var app = express();

app.get("/",function(req,res) {
	res.send("Hello World!");
}).listen(3000,function(){
	console.log("Server running on port: "+3000);
});