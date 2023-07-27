const removeFromArray = function (arr, ...args) {
  for (let i = 0; i < args.length; i++) {
    if (arr.includes(args[i])) {
      arr.splice(arr.indexOf(args[i]), 1);
    }
  }
  return arr;
};

const arr1 = [1, 2, 3, 4];
console.log(removeFromArray(arr1, 2, 3));

// Do not edit below this line
module.exports = removeFromArray;
