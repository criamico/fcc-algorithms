/*Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
    var result = '',
        digit,
        numStr = num.toString(),
        numBroken = [],
        len = numStr.length;

    var romanDigits = {
        "1": "I",
        "2": "II",
        "3": "III",
        "4": "IV",
        "5": "V",
        "6": "VI",
        "7": "VII",
        "8": "VIII",
        "9": "IX",
        "10": "X",
        "20": "XX",
        "30": "XXX",
        "40": "XL",
        "50": "L",
        "60": "LX",
        "70": "LXX",
        "80": "LXXX",
        "90": "XC",
        "100": "C",
        "200": "CC",
        "300": "CCC",
        "400": "CD",
        "500": "D",
        "600": "DC",
        "700": "DCC",
        "800": "DCCC",
        "900": "CM",
        "1000": "M",
        "2000": "MM",
        "3000": "MMM"
    }

    /*Break down the number */
    for(var i=0; i< len; i++){
        switch(len-i-1){
            case 0:
                numBroken.push(parseInt(numStr[i]));
                break;
            case 1:
                numBroken.push(parseInt(numStr[i])*10);
                break;
            case 2:
                 numBroken.push(parseInt(numStr[i])*100);
                 break;
            case 3:
                 numBroken.push(parseInt(numStr[i])*1000);
                 break;
        }
    }
    /*now iterate on the array, convert the values and concat them */
    for(i=0; i< numBroken.length; i++){
        if (numBroken[i] !== 0){
            digit = numBroken[i].toString();
            result+= romanDigits[digit];
        }
    }


return result;

}
