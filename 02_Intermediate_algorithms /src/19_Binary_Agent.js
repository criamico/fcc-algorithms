/*Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/

function binaryAgent(str) {
    return str.split(" ").map(function(val){
        // convert each binary string to integer, then convert to correspondent character
        return String.fromCharCode(parseInt(val,2)) ;
    }).join("");
}
