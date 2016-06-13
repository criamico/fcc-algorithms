/*Check if the predicate (second argument) is truthy on all elements of a collection (first argument).*/

function truthCheck(collection, pre) {
  var trueTot = 0;

  for (var i=0; i<collection.length;i++){
    if ((collection[i].hasOwnProperty(pre) && typeof collection[i][pre] === 'number' && isNaN(collection[i][pre]) === false && collection[i][pre] !== 0) ||
        (typeof collection[i][pre] !== 'number' && collection[i].hasOwnProperty(pre) && collection[i][pre] !== false && collection[i][pre] !== null && collection[i][pre] !== undefined  && collection[i][pre] !== '' ))
        trueTot++;
  }

   if (trueTot === collection.length)
        return true;
    return false;

}
