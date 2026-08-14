/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let currentInput = n
    return function() {
        return currentInput++;
    };
};


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */