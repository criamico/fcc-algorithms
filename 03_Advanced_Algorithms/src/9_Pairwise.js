/*Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]

Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6*/

function pairwise(arr, arg) {
    var tot = 0,
        target,
        targetIndex,
        copyArr;

    copyArr = arr.slice();
   /* console.log('===start===');
    console.log('arg', arg);*/
    if (copyArr.length > 0){
        return copyArr.reduce(function(prev, curr, i){
            target = arg - curr;
           /* console.log(copyArr);
            console.log('curr: ', curr, 'target:',target,'tot:', prev);*/
            if (copyArr.indexOf(target) !== -1 && copyArr.indexOf(target) !== i ){
                targetIndex = copyArr.indexOf(target);
                tot += i + targetIndex;
                // remove the found values from the array
                copyArr.splice(targetIndex, 1, NaN);
                copyArr.splice(i,1,NaN);
            /*    console.log('indices: ' ,i, targetIndex,'tot:', tot);*/
                return tot;
            }
            return(prev);
        }, 0);

    }
    else return 0;
}
