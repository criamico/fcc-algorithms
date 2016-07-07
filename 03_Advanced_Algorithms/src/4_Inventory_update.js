/*Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
Update the current existing inventory item quantities (in arr1).
If an item cannot be found, add the new item and quantity into the inventory array.
The returned inventory array should be in alphabetical order by item.*/

function updateInventory(arr1, arr2) {
    var updated = [],
        inv = [],
        count = 0;

    // concat the arrays
    arr1 = arr1.concat(arr2);

    // sort them out
    arr1.sort(function(a, b) {
        return a[1] == b[1] ? 0 : (a[1] < b[1] ? -1 : 1);
    });

    //now iterate on arr1. if an item it's a different type than the previous, push it in the updated array;
     //else, if it's the same type, update it's count
    updated[0] = arr1[0];
    for (var i = 1; i < arr1.length; i++){
        if (arr1[i][1] !== arr1[i-1][1]){
            updated.push(arr1[i]);
            count++;
        }
        else
            updated[count][0] += arr1[i][0];

    }

    return updated;
}
