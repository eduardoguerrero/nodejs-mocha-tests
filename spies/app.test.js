

const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

/*
Spy, if the function was called with the correct arguments.
npm install rewire@2.5.2 --save-dev
npm run test-watch
Check package.json 'scripts' configuration 
*/

describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Rene', 32);
        expect(spy).toHaveBeenCalledWith('Rene', 32);
    });

    it('should call saveUser with user object', () => {
        var email = 'rene.escobar@example.com';
        var password = '123abc';
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({
            email, password
        });
    });


});