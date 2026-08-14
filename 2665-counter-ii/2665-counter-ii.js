/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let originalInteger = init;
    let updatedInteger = init;
    let resultFunction = {
        increment: function(){
            return ++updatedInteger
        }, 
        decrement: function(){
            return --updatedInteger
        },
        reset: function(){
            updatedInteger = originalInteger;
            return updatedInteger
        }
    }
    return resultFunction;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */