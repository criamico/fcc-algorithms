/*Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

*/
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var index = 0;

  arr.sort(function(a, b) {
    return a - b;
    });
  var len = arr.length;
  for (var i = 0; i<len; i++) {
    if (num <= arr[0])
        return 0;
    else if (num <= arr[i])
        return i;
    else if (num > arr[len-1])
        return len;

  }

}

console.log(getIndexToIns([20, 3, 5], 19)); /*2*/
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); /*3*/
console.log(getIndexToIns([5, 3, 20, 3], 5)); /*2*/
console.log(getIndexToIns([2, 5, 10], 15)); /*3*/