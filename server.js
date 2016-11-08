var express = require('express');
var fs = require('fs')
var path = require('path')
var moment = require('moment')
var app = express();

app.set('port',process.env.PORT || 3000)
app.use(express.static(path.resolve(__dirname,'public')));
app.get("/:unixtimestamp", (req,res) => {
	var time  = moment(req.params.unixtimestamp,"MM DD, YYYY",true)

	if (!time.isValid()) {
		time = moment.unix(req.params.unixtimestamp);
	}

	if (!time.isValid()) {
		res.json({
			"humanunderstanding":null,
			"unix":null
		});
	}
	res.json({
		"humanunderstanding":time.format("MM DD, YYYY"),
		"unix":time.format("X")
	});
	// res.end();
}).listen(app.get('port'), () => {
	console.log(`Server running on port ${app.get('port')}`);
});