/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.

In other words, return the symmetric difference of the two arrays.*/

function oneSideDiff(a, b){
    var result = [];
    for(var i=0; i<a.length ; i++) {
        if (b.indexOf(a[i]) === -1)
            result.push(a[i]);
    }
    return result;
}

function diffArray(arr1, arr2) {
  return oneSideDiff(arr1, arr2).concat(oneSideDiff(arr2, arr1));
}

