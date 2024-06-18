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

const even = function(num){
    if(num%2 === 0){
        return true;
    }
    return false;
};

const odd = function(num){
    if(num%2 === 0){
        return false;
    }
    return true;

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
