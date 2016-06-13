describe('Function 1 (Sum numbers in range)', function(){
    it('should sum all the numbers in the given range', function(){
        expect(sumAll([1, 4])).toBe(10);
        expect(sumAll([4, 1])).toBe(10);
        expect(sumAll([5, 10])).toBe(45);
        expect(sumAll([10, 5])).toBe(45);
        expect(sumAll([10, 5, 3])).toBe(-1);
        expect(sumAll([5,5])).toBe(-1);
    });
});

describe('Function 2 (Diff two arrays)', function(){
    it('should be able to compare two arrays and return their symmetric difference', function(){
        expect(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).toEqual(["pink wool"]);
        expect(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).toEqual(["pink wool", "diorite"]);
        expect(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])).toEqual([]);
        expect(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])).toEqual(["piglet", 4]);
        expect(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])).toEqual(["snuffleupagus", "cookie monster", "elmo"]);
        expect(diffArray([1, "calf", 3, "piglet"], [7, "filly"])).toEqual([1, "calf", 3, "piglet", 7, "filly"]);
        expect(diffArray([1, 2, 3, 5, 8], [1, 2, 3, 4, 5])).toEqual([8,4]);

    });
});

describe('Function 3 (Convert to roman)', function(){
    it('should be able to convert to roman numeral', function(){
        expect(convertToRoman(0)).toBe("");
        expect(convertToRoman(1)).toBe("I");
        expect(convertToRoman(2)).toBe("II");
        expect(convertToRoman(3)).toBe("III");
        expect(convertToRoman(4)).toBe("IV");
        expect(convertToRoman(5)).toBe("V");
        expect(convertToRoman(6)).toBe("VI");
        expect(convertToRoman(7)).toBe("VII");
        expect(convertToRoman(8)).toBe("VIII");
        expect(convertToRoman(9)).toBe("IX");
        expect(convertToRoman(10)).toBe("X");
        expect(convertToRoman(11)).toBe("XI");
        expect(convertToRoman(12)).toBe("XII");
        expect(convertToRoman(16)).toBe("XVI");
        expect(convertToRoman(19)).toBe("XIX");
        expect(convertToRoman(29)).toBe("XXIX");
        expect(convertToRoman(30)).toBe("XXX");
        expect(convertToRoman(44)).toBe("XLIV");
        expect(convertToRoman(45)).toBe("XLV");
        expect(convertToRoman(50)).toBe("L");
        expect(convertToRoman(68)).toBe("LXVIII");
        expect(convertToRoman(83)).toBe("LXXXIII");
        expect(convertToRoman(97)).toBe("XCVII");
        expect(convertToRoman(99)).toBe("XCIX");
        expect(convertToRoman(500)).toBe("D");
        expect(convertToRoman(501)).toBe("DI");
        expect(convertToRoman(649)).toBe("DCXLIX");
        expect(convertToRoman(798)).toBe("DCCXCVIII");
        expect(convertToRoman(891)).toBe("DCCCXCI");
        expect(convertToRoman(1000)).toBe("M");
        expect(convertToRoman(1004)).toBe("MIV");
        expect(convertToRoman(1006)).toBe("MVI");
        expect(convertToRoman(1023)).toBe("MXXIII");
        expect(convertToRoman(2014)).toBe("MMXIV");
        expect(convertToRoman(3999)).toBe("MMMCMXCIX");
    });
});


describe('Function 4 (Where are you)', function(){
    it('should look through an array of objects and return an array of all objects that have matching property and value pairs ', function(){
        expect(whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })).toEqual([{ first: "Tybalt", last: "Capulet" }]);
        expect(whereAreYou([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 })).toEqual([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]);
        expect(whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })).toEqual([{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]);
        expect(whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })).toEqual([{ "a": 1, "b": 2, "c": 2 }]);
    });
});


describe('Function 5 (Search and replace)', function(){
    it('should find and replace before with after in the provided string', function(){
        expect(myReplace("Let us go to the store", "store", "mall")).toBe("Let us go to the mall");
        expect(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")).toBe("He is Sitting on the couch");
        expect(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")).toBe("A quick brown fox leaped over the lazy dog");
        expect(myReplace("This has a spellngi error", "spellngi", "spelling")).toBe("This has a spelling error");
        expect(myReplace("His name is Tom", "Tom", "john")).toBe("His name is John");
        expect(myReplace("Let us get back to more Coding", "Coding", "algorithms")).toBe("Let us get back to more Algorithms");
        expect(myReplace("Let us get back to more Coding", "", "algorithms")).toBe("Let us get back to more Coding");
        expect(myReplace("Let us get back to more Coding", "new", "algorithms")).toBe("Let us get back to more Coding");
    });
});

describe('Function 6 (Pig Latin)', function(){
    it('should translate an english word in "pig latin"', function(){
        expect(translatePigLatin("california")).toBe("aliforniacay");
        expect(translatePigLatin("pig")).toBe("igpay");
        expect(translatePigLatin("paragraphs")).toBe("aragraphspay");
        expect(translatePigLatin("glove")).toBe("oveglay");
        expect(translatePigLatin("algorithm")).toBe("algorithmway");
        expect(translatePigLatin("egg")).toBe("eggway");
        expect(translatePigLatin("california")).toBe("aliforniacay");
        expect(translatePigLatin("eight")).toBe("eightway");
        expect(translatePigLatin("happy")).toBe("appyhay");
        expect(translatePigLatin("")).toBe("");

    });
});

describe('Function 7 (DNA Pairing)', function(){
    it('should pair the missing element to the provided characters', function(){
         expect(pairElement("ATCGA")).toEqual([["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]);
         expect(pairElement("TTGAG")).toEqual([["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]);
         expect(pairElement("CTCTA")).toEqual([["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]);
         expect(pairElement("GCG")).toEqual([["G","C"],["C","G"],["G","C"]]);
         expect(pairElement("")).toEqual([]);
    });
});

describe('Function 8 (Missing Letters)', function(){
    it('should find the missing letter in the provided range', function(){
         expect(fearNotLetter("abce")).toBe("d");
         expect(fearNotLetter("abcdefghjklmno")).toBe("i");
         expect(fearNotLetter("bcd")).toBe(undefined);
         expect(fearNotLetter("yz")).toBe(undefined);
         expect(fearNotLetter("zy")).toBe(undefined);

    });
});

describe('Function 9 (Check Booleans)', function(){
    it('should check if the provided value is a boolean primitive', function(){
         expect(booWho(true)).toBe(true);
         expect(booWho(false)).toBe(true);
         expect(booWho([].slice)).toBe(false);
         expect(booWho({ "a": 1 })).toBe(false);
         expect(booWho(1)).toBe(false);
         expect(booWho(NaN)).toBe(false);
         expect(booWho("a")).toBe(false);
         expect(booWho("true")).toBe(false);
         expect(booWho("false")).toBe(false);
    });
});

describe('Function 10 (Check Booleans)', function(){
    it('should check if the provided value is a boolean primitive', function(){
         expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([1, 3, 2, 5, 4]);
         expect(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])).toEqual([1, 3, 2, [5], [4]]);
         expect(uniteUnique([1, 2, 3], [5, 2, 1])).toEqual([1, 2, 3, 5]);
         expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toEqual([1, 2, 3, 5, 4, 6, 7, 8]);
    });
});

describe('Function 11 (Convert HTML Entities)', function(){
    it('should convert some characters to their HTML version', function(){
         expect(convertHTML("Dolce & Gabbana")).toEqual("Dolce &amp; Gabbana");
         expect(convertHTML("Hamburgers < Pizza < Tacos")).toEqual("Hamburgers &lt; Pizza &lt; Tacos");
         expect(convertHTML("Sixty > twelve")).toEqual("Sixty &gt; twelve");
         expect(convertHTML('Stuff in "quotation marks"')).toEqual("Stuff in &quot;quotation marks&quot;");
         expect(convertHTML("Shindler's List")).toEqual("Shindler&apos;s List");
         expect(convertHTML("<>")).toEqual("&lt;&gt;");
         expect(convertHTML("abc")).toEqual("abc");

    });
});

describe('Function 12 (Spinal case)', function(){
    it('should convert strings to spinal case', function(){
        expect(spinalCase("This Is Spinal Tap")).toEqual("this-is-spinal-tap");
        expect(spinalCase("thisIsSpinalTap")).toEqual("this-is-spinal-tap");
        expect(spinalCase("The_Andy_Griffith_Show")).toEqual("the-andy-griffith-show");
        expect(spinalCase("Teletubbies say Eh-oh")).toEqual("teletubbies-say-eh-oh");
        expect(spinalCase("AllThe-small Things")).toEqual("all-the-small-things");
    });
});

describe('Function 13 (Sum Fibonacci numbers)', function(){
    it('should sum all the Fibonacci numbers in range', function(){
        // test the fibonacci generator
        expect(calcFib(1)).toEqual([0,1]);
        expect(calcFib(2)).toEqual([0,1,1]);
        expect(calcFib(3)).toEqual([0,1,1,2]);
        expect(calcFib(6)).toEqual([0,1,1,2,3,5,8]);
        expect(calcFib(9)).toEqual([0,1,1,2,3,5,8,13,21,34]);

        expect(sumOddFibs(4)).toBe(5);
        expect(sumOddFibs(1000)).toBe(1785);
        expect(sumOddFibs(75024)).toBe(60696);
        expect(sumOddFibs(75025)).toBe(135721);
        expect(sumOddFibs(4000000)).toBe(4613732);
    });
});


describe('Function 14 (Sum Primes)', function(){
    it('should sum all prime numbers up to and including the provided number.', function(){
        expect(findPrimes(1)).toEqual(undefined);
        expect(findPrimes(2)).toEqual([2]);
        expect(findPrimes(3)).toEqual([2, 3]);
        expect(findPrimes(6)).toEqual([2, 3, 5]);
        expect(findPrimes(10)).toEqual([2, 3, 5, 7]);
        expect(findPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
        expect(findPrimes(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);

        expect(sumPrimes(10)).toBe(17);
        expect(sumPrimes(977)).toBe(73156);
    });
});

describe('Function 15 (Range Smallest Common Multiple)', function(){
    it('should find the smallest common multiple of the provided parameters that is evenly divisible by all numbers between them', function(){
        expect(smallestCommons([1, 5])).toBe(60);
        expect(smallestCommons([5, 1])).toBe(60);
        expect(smallestCommons([1, 13])).toBe(360360);

    });
});


describe('Function 16 (Finders Keepers)', function(){
    it('should return the array elements that pass the truth test specified in second argument', function(){
        expect(findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; }) ).toBe(8);
        expect(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })).toBe(undefined);
    });
});

describe('Function 17 (Drop elements)', function(){
    it('should drop the elements of an array starting from the front, until the second argument returns true', function(){
        expect(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})).toEqual([3, 4]);
        expect(dropElements([0, 1, 0, 1], function(n) {return n === 1;})).toEqual([1, 0, 1]);
        expect(dropElements([1, 2, 3], function(n) {return n > 0;})).toEqual([1, 2, 3]);
        expect(dropElements([1, 2, 3, 4], function(n) {return n > 5;} )).toEqual([]);
        expect(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;} )).toEqual([7, 4]);
        expect(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;} )).toEqual([3, 9, 2]);
    });
});


describe('Function 18 (Flatten Array)', function(){
    it('should flatten an array with varying levels of nesting', function(){
        expect(steamrollArray([[["a"]], [["b"]]])).toEqual(["a", "b"]);
        expect(steamrollArray([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
        expect(steamrollArray([1, {}, [3, [[4]]]])).toEqual([1, {}, 3, 4]);
        expect(steamrollArray([[0], 9, 2, [3, 4, 5], 6, [7,[8]], 9])).toEqual([0, 9, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});

describe('Function 19 (Binary Agents)', function(){
    it('should return an english translated sentence of the passed binary string', function(){
        expect(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")).toBe("Aren't bonfires fun!?");
        expect(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")).toBe("I love FreeCodeCamp!");

    });
});


describe('Function 20 (Everything be true)', function(){
    it('should Check if the predicate is truthy on all elements of a collection', function(){
        expect(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")).toBe(true);
        expect(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")).toBe(false);
        expect(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")).toBe(false);
        expect(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat")).toBe(false);
        expect(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat")).toBe(true);
        expect(truthCheck([{"single": "yes"}], "single")).toBe(true);
        expect(truthCheck([{"single": ""}, {"single": "double"}], "single")).toBe(false);
        expect(truthCheck([{"single": "double"}, {"single": undefined}], "single")).toBe(false);
        expect(truthCheck([{"single": "double"}, {"single": NaN}], "single")).toBe(false);
    });
});

describe('Function 21 (Arguments Optional)', function(){
    it('should create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.', function(){
        expect(addTogether(2, 3)).toBe(5);
        expect(addTogether("http://bit.ly/IqT6zt")).toBe(undefined);
        expect(addTogether(2, "3")).toBe(undefined);
        expect(addTogether(2)(3)).toBe(5);
        expect(addTogether(2)([3])).toBe(undefined);

    });
});