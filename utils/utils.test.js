const utils = require('./utils');

const expect = require('expect');

describe('Utils', () => {

	describe('#add', () => {
		it('should add two numbers', () => {
			var res = utils.add(33, 11);
			expect(res).toBe(44).toBeA('number');
			//if(res!==44){
			//	throw new Error(`Expected 44, but got ${res}.`);
			//}
		});
	});

	//test async function -> done
	it('should async ass two numbers', (done) => {
		utils.asyncAdd(4, 3, (sum) => {
			expect(sum).toBe(7).toBeA('number');
			done();
		});
	});

	it('should async square a number', (done) => {
		utils.asyncSquare(5, (res) => {
			expect(res).toBe(25).toBeA('number');
			done();
		});
	});

	it('should square a number', () => {
		var res = utils.square(3);
		expect(res).toBe(9).toBeA('number');
		//if(res!==9){
		//	throw new Error(`Expected 4, but got ${res}.`);
		//}
	});

	//More examples
	it('should expect some values', () => {
		//expect(12).toNotBe(11);
		//expect({name: "Rene"}).toEqual({name: "Rene"});
		//expect([2,3,4]).toInclude(4);
		expect([2, 3, 4]).toExclude(1);
		expect({
			name: "Rene",
			age: 25,
			location: 'San Salvador'
		}).toInclude({
			age: 25
		});
	});
});


it('should set first and lastname', () => {
	var user = {
		location: 'Santa Tecla',
		age: 32
	};
	var res = utils.setName(user, 'Rene Escobar');
	expect(res).toInclude({
		firstName: 'Rene',
		lastName: 'Escobar'
	});
});