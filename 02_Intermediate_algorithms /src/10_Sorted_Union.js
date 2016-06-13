/*Write a function that takes two or more arrays and returns a new array of unique values

in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order,

but with no duplicates in the final array.

The unique numbers should be sorted by their original order,

but the final array should not be sorted in numerical order.*/

function uniteUnique(arr) {
    var args = Array.from(arguments),
        sorted = [];

   //flatten the array  (one level nesting)
   var flattened = args.reduce(function(a, b) {
      return a.concat(b);
    }, []);
    sorted[0] = flattened[0];

    // Build the sorted array
    for(var i = 1; i<flattened.length; i++){
        if (sorted.indexOf(flattened[i]) === -1)
            sorted.push(flattened[i]);
    }

  return sorted;
}