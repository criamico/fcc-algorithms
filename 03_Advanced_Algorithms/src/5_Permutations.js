/*Return the number of total permutations of the provided string that don't have repeated consecutive letters.
Assume that all characters in the provided string are each unique.
For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa),
but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
Heap algorithm: https://en.wikipedia.org/wiki/Heap%27s_algorithm
*/

function permAlone(str) {

    var permutations = [],
        arr = str.split(""),
        re;

    function swap(a, b){
        var tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    }

    //Heap algorithm, generates all the permutations
    function generate(n) {
        if (n == 1) {
                permutations.push(arr.join(""));
            }
            else {
                for (var i = 0; i != n; ++i) {
                    generate(n - 1);
                    swap(n % 2 ? 0 : i, n - 1);
                }
            }
        }

    if (str.length > 1){
        generate(arr.length);
        re = /([a-z])\1/i;

        // check for repetitions and count only the non repeated permutations
        return permutations.reduce(function(num, currEl){
            if (!currEl.match(re))
                num++;
            return num;
        }, 0);
    }
    else return 1;
}
