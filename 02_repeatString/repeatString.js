const repeatString = function (str, repeatTimes) {
  let repeatedString = '';

  if (repeatTimes < 0) {
    return 'ERROR';
  }

  for (let i = 0; i < repeatTimes; i++) {
    repeatedString += str;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
