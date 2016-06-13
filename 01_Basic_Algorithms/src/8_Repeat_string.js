/*Repeat a given string (first argument) num times (second argument).

Return an empty string if num is a negative number.*/

function repeatStringNumTimes(str, num) {
  var rStr = '';
  if (num > 0)
    rStr = str.repeat(num);

  return rStr;
}
