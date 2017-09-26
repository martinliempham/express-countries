var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.static('express-countries'));


// app.set('view engine','pug');

// look for templates in my views folder otherwise look for templates in views folder
// app.set('views','./my-views');
// '/'  is the default


function readJSONFile(filepath, callback){

	fs.readFile(filepath, 'utf-8', function(err, data){
		
		if (err) throw err;

		//after parsing is finished execute the callback
		var parsed = JSON.parse(data);

		callback(parsed);
	});


}

module.exports = readJSONFile