/*Create a function that takes two or more arrays and returns an array of
the symmetric difference (△ or ⊕) of the provided arrays.
Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}),
the mathematical term "symmetric difference" of two sets is the set of elements
which are in either of the two sets, but not in both (A △ B = C = {1, 4}).
For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both
(C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).*/

function sym(args) {
    var input = Array.from(arguments),
        diffTot = [],
        sorted = [];

    //Symmetrical difference of a couple of arrays
    function DiffOfTwo(a,b){
        var half1 = [],
            half2 = [];

        // find the one-way symmetrical difference
        function HalfDiff(arr1, arr2){
            var half = [];
            half = arr1.filter(function(val, index, self){
                   return (arr2.indexOf(val) === -1 && val !== self[index - 1])? true : false;
                });
            return half;
        }

        half1 = HalfDiff(a, b);
        half2 = HalfDiff(b, a);
    return half1.concat(half2);

    }

    // now apply the function to couples of arrays, until the end
    // the result it's correct but the values need to be sorted to pass the tests
    diffTot = input[0];
    for (var i=1; i < input.length;i++){
        diffTot = DiffOfTwo(diffTot, input[i]);
    }

    //sort the values inside
    sorted = diffTot.sort(function(a, b) {
        return a - b;
    });

    return sorted;
}