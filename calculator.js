const sum = function(a, b){
    return a + b;
};

const subtract = function(a,b){
    return a -b;
};

const multiply = function(a,b){
    return a*b;
};

const divide = function(a,b){
    return a/b;
};

const modulus = function(a,b){
    return a%b;
};

const evenOrOdd = function(num){
    if(num%2 === 0){
        return true;
    }
    return false;
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
