/*Flatten a nested array. You must account for varying levels of nesting.*/

function steamrollArray(arr) {

    function flatten(arr, flattened){
        for(var i = 0; i < arr.length; i++){
            if (arr[i].constructor === Array)
                    flatten(arr[i], flattened);
            else
                flattened.push(arr[i]);
        }
        return flattened;
    };

    return flatten(arr, []);
}


