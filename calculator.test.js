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
  test('can subtract two positive numbers', () => {
    expected = 3;
    actual = subtract(10,7);
    expect(actual).toBe(expected)

    
  });

  test('can subtract one positive number and one negative number', () => {
    expected = -11;
    actual = subtract(-4,7);
    expect(actual).toBe(expected)

    
  });

  test('can subtract one negative number and one negative number', () => {
    expected = 3;
    actual = subtract(-4,-7);
    expect(actual).toBe(expected)

    
  });

});

describe('multiply', () => {
  test('can multiply two positive numbers', () => {
    expected = 3;
    actual = multiply(3,1);
    expect(actual).toBe(expected)

    
  });
  test('can multiply two negative numbers', () => {
    expected = 150;
    actual = multiply(-50,-3);
    expect(actual).toBe(expected)

    
  });
  test('can multiply one negative number and one positive', () => {
    expected = -150;
    actual = multiply(50,-3);
    expect(actual).toBe(expected)

    
  });

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
