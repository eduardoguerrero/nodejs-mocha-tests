/*
Mocha and basic testing
Check package.json 'scripts' configuration 
https://mochajs.org/
npm install mocha@3.0.0 --save-dev

Execute test, add script to package.json:
npm test
npm run test-watch

https://github.com/mjackson/expect
npm i expect@1.20.2 --save-dev
npm i express@4.14.0 --save

https://github.com/visionmedia/supertest
npm i supertest@2.0.0
*/

module.exports.add = (a, b)=> a + b;


module.exports.asyncAdd = (a, b, callback)=>{
	setTimeout(()=>{
		callback(a + b);
	},1000);
}


module.exports.square = (x)=> x * x;

module.exports.asyncSquare = (x, callback)=>{
	setTimeout(()=>{
		callback(x * x);
	},1000);
};

module.exports.setName = (user, fullName) =>{
	var names = fullName.split(' ');
	user.firstName = names[0];
	user.lastName  = names[1];
	return user;
};