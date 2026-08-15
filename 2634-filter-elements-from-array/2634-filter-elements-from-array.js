/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn){
    const filteredArr =[];
    arr.forEach((elem, idx) => {
        if(fn(elem, idx)){
            filteredArr.push(elem)
        }
    });
    return filteredArr;
}