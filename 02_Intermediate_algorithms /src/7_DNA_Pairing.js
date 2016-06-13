/*The DNA strand is missing the pairing element.

Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.*/


function pairElement(str) {
    var basePairs = [];

    basePairs = str.split('');

    for (i in basePairs){
        if (basePairs[i] === 'T')
            basePairs[i] = ['T','A'];
        else if (basePairs[i] === 'A')
            basePairs[i] = ['A','T'];
        else if (basePairs[i] === 'C')
            basePairs[i] = ['C','G'];
        else if (basePairs[i] === 'G')
            basePairs[i] = ['G','C'];
    }

  return basePairs;
}
