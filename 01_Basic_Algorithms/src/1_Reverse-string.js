/*Reverse string*/
function reverseString(str) {
  var array = str.split("");
  array = array.reverse();
  str = array.join("");

  return str;
}

// console.log(reverseString("hello"));