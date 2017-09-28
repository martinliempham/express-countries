var fs = require('fs');

var express = require('express');
var app = express();

app.set('view engine','pug');
app.set('views','./my-views');


app.get('/:code', function(request, response) {
	var userId=request.params.code.toUpperCase();

	fs.readFile('./countries.json', 'utf-8', function(err, jsonFile){
		if(err) {
			console.log(`an error occurred: ${err}`);
			throw err;
		}

		var countries = JSON.parse(jsonFile);
		var countriesParsed = countries[userId];
		  response.render('list',countriesParsed)
		
	});
});

app.listen(3000, function(){
  console.log('App is listening on port 3000');
})

app.get('*', function(request, response){
	response.status(404).send('uh oh! page not found!');
})

