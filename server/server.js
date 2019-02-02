

const express = require('express');


var app =  express();


app.get('/', (req, res)=>{
	//res.send('Hello world!');
	res.status(404).send({
		error: 'Page not found.',
		name:  'Tool app v1.0'
	});
});


app.get('/users',(req, res)=>{
	res.send([
	{
		name: 'Rene',
		age:   32
	},{
		name: 'Eduardo',
		age: 33
	},{
		name: 'Juan',
		age:  34
	}]);
});

app.listen(3000);

module.exports.app = app;