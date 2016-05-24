/*Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
    var arr = str.split(" ");
    var longest = arr.reduce(function(a, b){
        if (b.length > a.length)
            return b;
        else return a;
    });

    return longest.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a barrel roll"));
