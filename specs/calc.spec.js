const Calculator = require('../src/calculator');

describe('calculator', function () {
    describe('sum', function () {
        it('should be the sum of two numbers', function () {
            let calc = new Calculator();
            let result = calc.sum(2, 3);

            assert.equal(result, 5);
        })
    })
})
