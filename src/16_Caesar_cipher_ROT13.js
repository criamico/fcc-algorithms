/*One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.

In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.

Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/
function decode(char){
    cCode = char.charCodeAt(0);
    if (cCode-13 >= 65)
        return String.fromCharCode(cCode-13);
    else
        return String.fromCharCode(cCode + 13);
}

/*THis version handles points and spaces*/
function rot13(str) { // LBH QVQ VG!
    str = str.toUpperCase();
    var cCode;
    var chars = '';

    for (var i = 0; i <str.length; i++) {
        /*console.log(str[i].search(/[A-Z]/));*/
        if (str[i].search(/[A-Z]/)!== -1)
            chars+= decode(str[i]);
        else
            chars+= str[i];
    }
    return chars;

}

// Change the inputs below to test
/*console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR YBIR?"));
*/
/*rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."*/