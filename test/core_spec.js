var sayHello = require('../src/core');

describe('Hello', function () {
    it('says hello', function () {
        expect(sayHello()).toBe('Hello, world!');
    });
});