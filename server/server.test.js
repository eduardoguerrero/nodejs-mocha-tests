

const request = require('supertest')

const expect = require('expect');

var app = require('./server').app

describe('Server', () => {

	describe('GET /', () => {

		it('should return hell world response', (done) => {
			request(app)
				.get('/')
				.expect(404)
				//.expect('Hello world!')
				//.expect({
				//	error: 'Page not found.'
				//})
				.expect((res) => {
					expect(res.body).toInclude({
						error: 'Page not found.'
					})
				})
				.end(done);
		});

	});

	describe('GET /users', () => {

		it('should return my user object and status code 200', (done) => {
			request(app)
				.get('/users')
				.expect(200)
				.expect((res) => {
					expect(res.body).toInclude({
						name: 'Rene',
						age: 32
					});
				})
				.end(done);
		});
	});



});