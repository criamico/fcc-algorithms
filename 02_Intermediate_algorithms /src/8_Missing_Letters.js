/*Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.*/

// function that creates range of characters
function range(start, len){
    var arr = [],
        i = start;

    if (i < start + len){
        while(i < start + len){
            arr.push(String.fromCharCode(i));
            i++;
        }
        return arr.join('');
    }
    else return '';
}

function fearNotLetter(str) {
    var len = str.length;
    var startCharCode  = str.charCodeAt(0),
        endCharCode  = str.charCodeAt(len -1),
        rangeLength = endCharCode - startCharCode + 1;

    var completeRange = range(startCharCode, rangeLength);

    if (str === completeRange || completeRange === '')
        return undefined;
    else{
        for(var i in completeRange){
            if (completeRange[i] !== str[i])
                return completeRange[i] ;
        }
    }

}

// console.log(fearNotLetter("abce"));
