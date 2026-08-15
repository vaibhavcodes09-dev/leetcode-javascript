/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let resultArr = [];
  arr.forEach((elem, idx) => {
    resultArr.push(fn(elem, idx));
  });
  return resultArr;
};
