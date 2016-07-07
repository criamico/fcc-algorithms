/*Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.*/


var Person = function(firstAndLast) {
    var arr = firstAndLast.split(' ');
    var firstName = arr[0] || '';
    var lastName = arr[1] ||'';

    this.getFullName = function(){
        return firstName + ' '+ lastName;
    };

     this.getLastName = function(){
        return lastName;
    };

    this.getFirstName = function(){
        return firstName;
    };

    this.setFirstName = function(first){
      firstName = first;
    };

    this.setLastName = function(last){
      lastName = last;
    };

    this.setFullName = function(firstAndLast){
      var newName = firstAndLast.split(' ');
      firstName = newName[0];
      lastName = newName[1];
    };
};
