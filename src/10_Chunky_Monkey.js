/*Write a function that splits an array (first argument)
into groups the length of size (second argument) and returns them as a two-dimensional array.*/


function chunkArrayInGroups(arr, size) {
    var chunckedArray = [];
    var bufferArr = [];

    if (arr.length > size){
        var cyclesN = arr.length/size;
        for(var j=0; j < cyclesN; j++){
            bufferArr = arr.slice(j*size,(j+1)*size);
            chunckedArray.push(bufferArr);
        }

    }

    return chunckedArray;

}


console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));