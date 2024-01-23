/* const { default: expect } = require('expect');

const calculator = require('../calculator');

 */
/* 
=======
const { default: expect } = require('expect');

const calculator = require('../calculator');

test('adds a + b', () => {
    //
})

test('substracts a - b', () => {
   //
})

test('multiplies a * b', () => {
    //
})

test('divides a / b', () => {
    // Consider decimals
})

test('Raises to power a ^ b', () => {
    //
})

<<<<<<< HEAD
 */

const evaluateNumber = require('../fizzBuzz');

test('Return "Fizz" if divisible by 3', () => {
    expect(evaluateNumber(6).toBe('Fizz'));
});

test('If divisible by 5, return "Buzz"', () => {
    expect(evaluateNumber(10).toBe('Buzz'));
});

test('If divisible by both 3 and 5, return "FizzBuzz"', () => {
    expect(evaluateNumber.evaluateNumber2(15).toBe('FizzBuzz'));
});

