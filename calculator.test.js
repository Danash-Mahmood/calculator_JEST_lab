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
  test('can divide two positive numbers', () => {
    expected = 2;
    actual = divide(4,2);
    expect(actual).toBe(expected)
  });

  test('can divide two negative numbers', () => {
    expected = 2;
    actual = divide(-4,-2);
    expect(actual).toBe(expected)
  });

  test('can divide one negative and one positive number', () => {
    expected = -2;
    actual = divide(4,-2);
    expect(actual).toBe(expected)
  });

});

describe('modulus', () => {
  test('can get a remainder of 0', () => {
    expected = 0;
    actual = modulus(4,2);
    expect(actual).toBe(expected)
  });

  test('can get a positive remainder', () => {
    expected = 1;
    actual = modulus(5,2);
    expect(actual).toBe(expected)
  });

  test('can get a negative remainder', () => {
    expected = -1;
    actual = modulus(-5,2);
    expect(actual).toBe(expected)
  });


});

describe('even', () => {
  test('can return true if input is even', () => {
    expected = true;
    actual = even(4);
    expect(actual).toBe(expected)
  });

  test('can return false if input is not even', () => {
    expected = false;
    actual = even(5);
    expect(actual).toBe(expected)
  });

});

describe('odd', () => {
  test('can return true if input is odd', () => {
    expected = true;
    actual = odd(5);
    expect(actual).toBe(expected)
  });

  test('can return false if input is not odd', () => {
    expected = false;
    actual = odd(4);
    expect(actual).toBe(expected)
  });
});
