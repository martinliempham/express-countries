var fs = require('fs');
var myArgs = process.argv[2];
 // console.log('myArgs: ', myArgs);
var express = require('express');
var app = express();

app.use(express.static('express-countries'));

app.get('/countries/:code', function(request, response) {
  console.log('got request for "/hello/world"');    
  response.send('hello there!');
  response.render('index')
});

//for pug
// app.set('view engine','pug');

// look for templates in my views folder otherwise look for templates in views folder
// app.set('views','./my-views');
// '/'  is the default



fs.readFile('./countries.json', 'utf-8', function(err, countries){
	if(err) {
		console.log(`an error occurred: ${err}`);
		throw err;
	}
	var parser = require('body-parser');
	app.use(parser.json(countries));

	var countries = JSON.parse(countries);

	for (var i = 0; i < countries.length; i++) {
		var i = countries[i]
		if(myArgs === countries[i].name){
			console.log(countries[i].name, countries[i].nativeName, countries[i].code, countries[i].population, countries[i].region, countries[i].flag)
		}
	}

})

app.listen(3000, function(){
  console.log('App is listening on port 3000');
})

app.get('*', function(request, response){
	response.status(404).send('uh oh! page not found!');
})

