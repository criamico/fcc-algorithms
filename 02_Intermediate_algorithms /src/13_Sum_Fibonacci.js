/*Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

*/

/*Calculate the Fibonacci sequence and return an array*/
function calcFib(n) {
    var fib = [0,1];

    if (n === 0)
        return [0];

    else if (n === 1)
        return fib;

    else if ( n > 1){
        for (var i = 2; i<= n; i++)
            fib.push(fib[i-1]+ fib[i-2]);
        }
    return fib;
}


function sumOddFibs(num) {
    var val = 0,
        seqN = 0,
        fibArray = [],
        oddFibArray = [];

    /*find the correct number of iterations to generate fib sequence*/
    while(calcFib(val).pop() <= num ){
        seqN = val;
        val++;
    }

    // array of fibonacci sequence
    fibArray = calcFib(seqN);

    // Create a second array containing the odd values only
    oddFibArray = fibArray.filter(function(el){
        if (el % 2 !== 0)
            return el;
    });

   // Now sum all the elements in the array
    return oddFibArray.reduce(function(a, b){
        return a+b;
    });

}