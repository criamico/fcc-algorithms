/*Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".*/
function titleCase(str) {
    var arr = str.split(" ");
    /*str = arr.forEach(function(word){
        return word.slice(0,1).toUpperCase() + word.slice(1, str.length);
    }).join(" ");*/
    var cap = [];
    for (var i = 0; i< arr.length; i++){
        cap[i] = arr[i].slice(0,1).toUpperCase() + arr[i].toLowerCase().slice(1, str.length);
    }
    return cap.join(" ");


}

console.log(titleCase("I'm a little tea pot"));