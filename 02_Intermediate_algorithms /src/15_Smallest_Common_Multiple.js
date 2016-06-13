/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.*/


function smallestCommons(arr) {
    var start,
        end,
        valuesList = [],
        lcmVal;

     // Greatest Common Divisor
    function GCD(a, b){
        return !b ? a : GCD(b, a%b);
    }

    // Least Common Multiple
    function LCM(a, b){
        return (a * b)/ GCD(a, b);
    }

    /*Find the min and max values */
    if(arr[0] < arr[1]){
        start = arr[0];
        end = arr[1];
    }
    else{
        start = arr[1];
        end = arr[0];
    }

    // build an array with all the values in the range
    for (var i= start; i <= end; i++){
        valuesList.push(i);
    }


    // find the least common multiple of all the values in the range
    lcmVal = start;
    for (i = 0; i < valuesList.length; i++)
        lcmVal = LCM(lcmVal, valuesList[i]);


    return lcmVal;

}
