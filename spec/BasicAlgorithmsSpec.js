describe('Function 1 (Reverse)', function(){
    it('should be able to reverse any string', function(){
        expect(reverseString("hello")).toBe("olleh");
        expect(reverseString("Howdy")).toBe("ydwoH");
        expect(reverseString("Greetings from Earth")).toBe("htraE morf sgniteerG");
    });
});

describe('Function 2 (Factorialize)', function(){
    it('should be able to calculate the factorial of any number', function(){
        expect(factorialize(5)).toBe(120);
        expect(factorialize(10)).toBe(3628800);
        expect(factorialize(20)).toBe(2432902008176640000);
        expect(factorialize(0)).toBe(1);
    });
});


describe('Function 3 (Palindrome)', function(){
    it('should be able to check if a string is Palindrome', function(){
        expect(palindrome("A man, a plan, a canal. Panama")).toBe(true);
        expect(palindrome("My age is 0, 0 si ega ym.")).toBe(true);
        expect(palindrome("0_0 (: /-\ :) 0-0")).toBe(true);
        expect(palindrome("Hello everyone")).toBe(false);
    });
});

describe('Function 4 (Longest Word)', function(){
    it('should find the longest word in a string', function(){
        expect(findLongestWord("The quick brown fox jumped over the lazy dog")).toBe(6);
        expect(findLongestWord("Google do a barrel roll")).toBe(6);
        expect(findLongestWord("Randomize stuff")).toBe(9);

    });
});

describe('Function 5 (Capitalize words)', function(){
    it('should be able to capitalize words in a string', function(){
        expect(titleCase("The quick brown fox jumped over the lazy dog")).toBe("The Quick Brown Fox Jumped Over The Lazy Dog");
        expect(titleCase("I'm a little tea pot")).toBe("I'm A Little Tea Pot");
        expect(titleCase("sHoRt AnD sToUt")).toBe("Short And Stout");
        expect(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).toBe("Here Is My Handle Here Is My Spout");
    });
});

describe('Function 6 (Largest Number)', function(){
    it('should return an array consisting of the largest number from each provided sub-array', function(){
        expect(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])).toEqual([5,27,39,1001]);
        expect(largestOfFour([[4, 5, 0, 21], [8, 27, 0, 26.8], [1, 2, 2, 4], [4, 4, 2.5, 1]])).toEqual([21,27,4,4]);
    });
});

describe('Function 7 (Match Ending)', function(){
    it('should check if a string ends with the given target string', function(){
        expect(confirmEnding("Bastian", "n")).toBe(true);
        expect(confirmEnding("He has to give me a new name", "name")).toBe(true);
        expect(confirmEnding("He has to give me a new name", "new")).toBe(false);
    });
});

describe('Function 8 (Repeat string)', function(){
    it('Repeat a given string num times', function(){
        expect(repeatStringNumTimes("*", 3)).toBe("***");
        expect(repeatStringNumTimes("abc", 3)).toBe("abcabcabc");
        expect(repeatStringNumTimes("abc", 4)).toBe("abcabcabcabc");
        expect(repeatStringNumTimes("abc", 1)).toBe("abc");
        expect(repeatStringNumTimes("*", 8)).toBe("********");
        expect(repeatStringNumTimes("abc", -2)).toBe("");

    });
});

describe('Function 9 (Truncate string)', function(){
    it('should truncate a string if it is longer than the given maximum string length and add three dots at the end', function(){
        expect(truncateString("A-tisket a-tasket A green and yellow basket", 11)).toBe("A-tisket...");
        expect(truncateString("Peter Piper picked a peck of pickled peppers", 14)).toBe("Peter Piper...");
        expect(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)).toBe("A-tisket a-tasket A green and yellow basket");
        expect(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)).toBe("A-tisket a-tasket A green and yellow basket");
        expect(truncateString("A-", 1)).toBe("A...");
        expect(truncateString("Absolutely Longer", 2)).toBe("Ab...");
    });
});

describe('Function 10 (Chunky Monkey)', function(){
    it('should splits an array into groups the length of size and return them as a two-dimensional array', function(){
        expect(chunkArrayInGroups(["a", "b", "c", "d"], 2)).toEqual([["a", "b"], ["c", "d"]]);
        expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)).toEqual([[0, 1, 2], [3, 4, 5]]);
        expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)).toEqual([[0, 1], [2, 3], [4, 5]]);
        expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)).toEqual([[0, 1, 2, 3], [4, 5]]);
        expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)).toEqual([[0, 1, 2], [3, 4, 5], [6]]);
        expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual([[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
    });
});

describe('Function 11 (Slasher)', function(){
    it('Returns the remaining elements of an array after chopping off n elements from the head', function(){
        expect(slasher([1, 2, 3], 2)).toEqual([3]);
        expect(slasher([1, 2, 3], 0)).toEqual([1, 2, 3]);
        expect(slasher([1, 2, 3], 9)).toEqual([]);
        expect(slasher([1, 2, 3], 4)).toEqual([]);
        expect(slasher(["burgers", "fries", "shake"], 1)).toEqual(["fries", "shake"]);
        expect(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5)).toEqual(["cheese", 4]);

    });
});


describe('Function 12 (Mutations)', function(){
    it('Returns true if the string in the first element of the array contains all of the letters of the string in the second element of the array', function(){
        expect(mutation(["hello", "hey"])).toBe(false);
        expect(mutation(["hello", "Hello"])).toBe(true);
        expect(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])).toBe(true);
        expect(mutation(["Mary", "Army"])).toBe(true);
        expect(mutation(["Alien", "line"])).toBe(true);
        expect(mutation(["floor", "for"])).toBe(true);
        expect(mutation(["hello", "neo"])).toBe(false);
        expect(mutation(["voodoo", "no"])).toBe(false);

    });
});



describe('Function 13 (Falsy Bouncer)', function(){
    it('should remove all the falsy values from an array', function(){
        expect(bouncer([7, "ate", "", false, 9])).toEqual([7, "ate", 9]);
        expect(bouncer([false, null, 0, NaN, undefined, ""])).toEqual([]);

    });
});

describe('Function 14 (Seek and Destroy)', function(){
    it('should remove the provided values from a given array', function(){
        expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1,1]);
        expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).toEqual([1,5,1]);
        expect(destroyer([2, 3, 2, 3], 2, 3)).toEqual([]);
        expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).toEqual([1]);

    });
});


describe('Function 15 (getIndexToIns)', function(){
    it('Return the lowest index at which a value should be inserted into an array once it has been sorted', function(){
        expect(getIndexToIns([10, 20, 30, 40, 50], 35)).toBe(3);
        expect(getIndexToIns([10, 20, 30, 40, 50], 30)).toBe(2);
        expect(getIndexToIns([40, 60], 50)).toBe(1);
        expect(getIndexToIns([3, 10, 5], 3)).toBe(0);
        expect(getIndexToIns([5, 3, 20, 3], 5)).toBe(2);
        expect(getIndexToIns([2, 20, 10], 19)).toBe(2);
        expect(getIndexToIns([2, 5, 10], 15)).toBe(3);


    });
});



describe('Function 16 (Decode ROT13)', function(){

    it('should be able to decode uppercase text encoded in ROT13', function(){
        expect(rot13("SERR PBQR PNZC")).toBe("FREE CODE CAMP");
        expect(rot13("SERR CVMMN!")).toBe("FREE PIZZA!");
        expect(rot13("SERR CVMMN!")).toBe("FREE LOVE?");
        expect(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")).toBe("THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.");
    });

});



