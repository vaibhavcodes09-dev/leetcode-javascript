/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let originalValue = val;
    let returnObject = {
      toBe: function(newValue){
        if(originalValue === newValue){
          return true
        }
        else throw new Error("Not Equal");
      },
      notToBe: function(newValue){
        if(originalValue !== newValue){
          return true
        }
        else throw new Error("Equal");
      }
    }
    return returnObject;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */