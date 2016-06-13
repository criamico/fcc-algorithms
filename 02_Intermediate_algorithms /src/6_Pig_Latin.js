/*Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word,

moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.*/

function translatePigLatin(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'],
        suffix = 'ay',
        vowelSuffix = 'way',
        vowelIndex;

    if (str!== ''){
        //find the first vowel
        for(vowelIndex=0; vowelIndex<str.length; vowelIndex++){
            if(vowels.indexOf(str[vowelIndex]) !== -1)
                break;
        }

        if (vowelIndex > 0)
            return str.slice(vowelIndex) + str.slice(0,vowelIndex) +  suffix;
        else
            return str +vowelSuffix;
    }
  return str;

}


