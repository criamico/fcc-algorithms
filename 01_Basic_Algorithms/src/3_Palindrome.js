/*Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.*/

function palindrome(str) {
   var plain = str.toLowerCase().replace(/\s|\W|[_]/g, '');/*\W matches also the underscore, so I have to add it explicitly*/
   /*console.log(plain);*/
   var array = plain.split("").reverse(),
    reversed = array.join("");

    /*console.log(reversed);*/
    if (plain === reversed)
        return true;
    else
        return false;

}



console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("0_0 (: /-\ :) 0-0"));