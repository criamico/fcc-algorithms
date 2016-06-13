/*You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.*/

function destroyer(arr) {
    var target = Array.from(arguments);
    target = target.slice(1, target.length); /*copy extra arguments in an array and remove the first element, which we already know*/
    /*console.log("arguments:", target);*/
    var filtered = arr;
    for (var i=0; i<target.length; i++){
        filtered = filtered.filter(function(value){
                return value !== target[i];
        });
    }
    return filtered;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([2, 3, 2, 3], 2, 3)); /*should return []*/
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));