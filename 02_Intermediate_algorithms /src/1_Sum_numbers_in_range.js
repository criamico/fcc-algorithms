/*We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.*/

function sumAll(arr) {
    var result = 0;
    if (arr.length === 2){
        if (arr[0] === arr[1])
            return -1;
        else if (arr[0]< arr[1]){
            min = arr[0];
            max = arr[1];
        }
        else{
            min = arr[1];
            max = arr[0];
        }
        for (var i = min; i <=max; i++) {
            result += i;
        }

        return result;
    }
    else return -1;


}
