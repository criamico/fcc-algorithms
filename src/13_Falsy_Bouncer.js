/*Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.*/


function bouncer(arr) {
    var filtered = arr.filter(function(value){
        if(value)
            return value;
    });
    return filtered;

}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""])); /*should return []*/