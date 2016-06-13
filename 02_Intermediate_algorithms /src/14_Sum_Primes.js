/*Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.*/

/*Build the array of prime numbers*/
function findPrimes(num){
    var primeArr = [2],
        isPrime = true;

    if (num < 2)
        return undefined;

    else {
        for(var n = 3;n <= num; n++){
            for(var i = 0;i < primeArr.length; i++){
                if (n % primeArr[i] === 0)
                    isPrime = false;

                else if (n % primeArr[i]!== 0 && isPrime)
                    isPrime = true && isPrime;
            }
            if (isPrime)
                primeArr.push(n);

            isPrime = true;
        }
        return primeArr;
    }

}



function sumPrimes(num) {
// Retrieve the list of primes up to num  and sum all its elements
    return findPrimes(num).reduce(function(a, b){
        return a+b;
    });

}