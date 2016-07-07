describe('Function 1 (telephoneCheck)', function(){
    it('should check US telephone numbers formats', function(){
        expect(telephoneCheck("1 555-555-5555")).toBe(true);
        expect(telephoneCheck("1 (555) 555-5555")).toBe(true);
        expect(telephoneCheck("5555555555")).toBe(true);
        expect(telephoneCheck("555-555-5555")).toBe(true);
        expect(telephoneCheck("(555)555-5555")).toBe(true);
        expect(telephoneCheck("1(555)555-5555")).toBe(true);
        expect(telephoneCheck("1 555 555 5555")).toBe(true);
        expect(telephoneCheck("1 456 789 4444")).toBe(true);
    });

     it('should exclude wrong formats', function(){
        expect(telephoneCheck("555-5555")).toBe(false);
        expect(telephoneCheck("5555555")).toBe(false);
        expect(telephoneCheck("55555555")).toBe(false);
        expect(telephoneCheck("1 555)555-5555")).toBe(false);
        expect(telephoneCheck("123**&!!asdf#")).toBe(false);
        expect(telephoneCheck("(6505552368)")).toBe(false);
        expect(telephoneCheck("2 (757) 622-7382")).toBe(false);
        expect(telephoneCheck("0 (757) 622-7382")).toBe(false);
        expect(telephoneCheck("-1 (757) 622-7382")).toBe(false);
        expect(telephoneCheck("2 757 622-7382")).toBe(false);
        expect(telephoneCheck("10 (757) 622-7382")).toBe(false);
        expect(telephoneCheck("27576227382")).toBe(false);
        expect(telephoneCheck("(275)76227382")).toBe(false);
        expect(telephoneCheck("2(757)6227382")).toBe(false);
        expect(telephoneCheck("2(757)622-7382")).toBe(false);
        expect(telephoneCheck("555)-555-5555")).toBe(false);
        expect(telephoneCheck("(555-555-5555)")).toBe(false);
        expect(telephoneCheck("(555)5(55?)-5555")).toBe(false);
    });

});


describe('Function 2 (Symmetric Diff)', function(){
    it('should work with two arguments', function(){
        expect(sym([1, 2, 3], [5, 2, 1, 4])).toEqual([3, 4, 5]);
        expect(sym([1, 2, 3], [5, 2, 1, 4]).length).toBe(3);

    });
    it('should work with three arguments, test 1', function(){
        expect(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])).toEqual([1, 4, 5]);
        expect(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length).toBe(3);

    });
    it('should work with three arguments, test 2', function(){
            expect(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).toEqual([1, 4, 5]);
            expect(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length).toBe(3);
    });
    it('should work with four arguments', function(){
            expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])).toEqual([2, 3, 4, 6, 7]);
            expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length).toBe(5);
    });
    it('should work with six arguments', function(){
            expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])).toEqual([1, 2, 4, 5, 6, 7, 8, 9]);
            expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]).length).toBe(8);
    });


});

describe('Function 3 (Exact change)', function(){
    it('should return change as an array', function(){
        expect(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])).toEqual([["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]);
        expect(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])).toEqual([["QUARTER", 0.50]]);

    });
    it('should return "Insufficient funds" if cash is insufficient', function(){
        expect(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).toEqual("Insufficient Funds");
        expect(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).toEqual("Insufficient Funds");

    });
    it('should return "Closed" if cash is equal to change', function(){
        expect(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).toEqual("Closed");
    });
});


describe('Function 4 (Inventory update)', function(){
    it('should compare and update the inventory', function(){
        expect(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length).toEqual(6);
        expect(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])).toEqual([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]);
        expect(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])).toEqual([[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]);
        expect(updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])).toEqual([[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]);
    });
});

describe('Function 5 (Friendly dates)', function(){

    it('should format a date range as month, ddth, yyyy', function(){
        expect(makeFriendlyDates(["2022-09-05", "2023-09-05"])).toEqual(["September 5th, 2022","September 5th, 2023"]);
    });
    it('if the range ends within a year it should format it a without showing the year at the end', function(){
        expect(makeFriendlyDates(["2017-03-01", "2017-05-05"])).toEqual(["March 1st, 2017","May 5th"]);
        expect(makeFriendlyDates(["2022-09-05", "2023-09-04"])).toEqual(["September 5th, 2022","September 4th"]);
    });
    it('if the range begins the current year it should format it without showing the year at the beginning', function(){
        expect(makeFriendlyDates(["2016-12-01", "2018-02-03"])).toEqual(["December 1st, 2016","February 3rd, 2018"]);
    });
    it('if the range begins and ends the current year it should format it without showing the year at all', function(){
        expect(makeFriendlyDates(["2016-12-01", "2017-02-03"])).toEqual(["December 1st","February 3rd"]);
        expect(makeFriendlyDates(["2016-07-01", "2016-07-04"])).toEqual(["July 1st","4th"]);
    });
    it('if the dates are equal show it once', function(){
        expect(makeFriendlyDates(["2018-01-13", "2018-01-13"])).toEqual(["January 13th, 2018"]);
    });

});


describe('Function 5 (Permutations)', function(){

    it("should return the number of total permutations of the provided string that don't have repeated consecutive letters", function(){
        expect(permAlone("a")).toBe(1);
        expect(permAlone("aab")).toBe(2);
        expect(permAlone("aabb")).toBe(8);
        expect(permAlone("aaab")).toBe(0);
        expect(permAlone("aaabb")).toBe(12);
        expect(permAlone("abcdefa")).toBe(3600);
        expect(permAlone("abfdefa")).toBe(2640);
    });
    it("should return 0 if all the letters are same", function(){
        expect(permAlone("aaa")).toBe(0);
        expect(permAlone("zzzzzzzz")).toBe(0);
    });


});



describe('Function 7 (Make a person)', function(){
    var bob;
    beforeEach(function(){
        bob = new Person('Bob Ross');
        bob.getFullName();
    });

    it('should create an object "person" having six keys', function(){
        expect(Object.keys(bob).length).toBe(6);
    });
    it('should be an instance of Person', function(){
        expect(bob instanceof Person).toBe(true);
    });

    it('should not interact directly with the properties of the object', function(){
        expect(bob.firstName).toBe(undefined);
        expect(bob.lastName).toBe(undefined);
    });
    it('should have a method getFirstName()', function(){
        expect(bob.getFirstName()).toBe('Bob');
    });
    it('should have a method getLastName()', function(){
        expect(bob.getLastName()).toBe('Ross');
    });
    it('should have a method getFullName()', function(){
        expect(bob.getFullName()).toBe('Bob Ross');
    });

    it('should have a method setFirstName() and a method setLastName()', function(){
        bob.setFirstName("Haskell");
        expect(bob.getFullName()).toBe('Haskell Ross');
        bob.setLastName("Curry");
        expect(bob.getFullName()).toBe('Haskell Curry');
    });


    it('should have a method setFullName()', function(){
        bob.setFullName("Haskell Curry")
        expect(bob.getFullName()).toBe('Haskell Curry');
        expect(bob.getLastName()).toBe('Curry');
        expect(bob.getFirstName()).toBe('Haskell');
    });
});


describe('Function 8 (Orbital Periods)', function(){

    it('should calculate the orbital periods of the elements', function(){
        expect(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])).toEqual([{name: "sputnik", orbitalPeriod: 86400}]);
    });

    it('should calculate the orbital periods of the elements', function(){
        expect(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])).toEqual([{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]);
    });
});

describe('Function 9 (Pairwise)', function(){

    it('should return 0 if the array is empty', function(){
        expect(pairwise([], 100)).toBe(0);
    });
    it('find element pairs whose sum equal the second argument arg and return the sum of their indices', function(){
        expect(pairwise([1, 4, 2, 3, 0, 5], 7)).toBe(11);
        expect(pairwise([7, 9, 11, 13, 15], 20)).toBe(6);
        expect(pairwise([1, 3, 2, 4], 4)).toBe(1);
        expect(pairwise([1, 1, 1], 2)).toBe(1);
        expect(pairwise([0, 0, 0, 0, 1, 1], 1)).toBe(10);
    });


});