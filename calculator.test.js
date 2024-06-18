const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  
  });

  test('can add two large positive numbers', () => { 
    expected = 1289;
    actual = sum(1000,289);
    expect(actual).toBe(expected)
    
  });

  test('can add two negative numbers', () => {
    expected = -10;
    actual = sum(-9,-1);
    expect(actual).toBe(expected)

    
  });

  test('can add zero', () => {
    expected = -10;
    actual = sum(-9,-1);
    expect(actual).toBe(expected)

    
  });

});

describe('subtract', () => {

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
