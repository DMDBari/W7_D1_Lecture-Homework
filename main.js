// console.log('Hello from main.js');

// Declaring variables
var firstName;

console.log(firstName);

firstName = 'George';

console.log(firstName);


var lastName = 'Bush';

console.log(lastName);

// redeclare the lastName variable
var lastName;
console.log(lastName)

var lastName = 'Clinton';
console.log(firstName, lastName);

// while possible, do not declare variables without keyword like var
message = 'DO NOT DO THIS'
console.log(message);


// Statement Termination

// On One line
console.log(firstName); console.log(lastName);

// on multi lines, semi colons are optional
console.log(firstName)
console.log(firstName);
console.log(lastName);
console.log(lastName)

// This will not work
// console.log(firstName) console.log(lastName)

// Clear the console
console.clear()


// Strings!
// similar to Python, can use single or double quotes (but not triple quotes)
// Like python, strings are immutable

var myString1 = "this is a string";
var myString2 = 'This is also a string';
var myString3 = "John's string with an apostrophe";
var myString4 = 'John\'s string with an apostrophe';
var myString5 = 'My "string" in quotes';
var myString6 = "my \"string\" in quotes";

console.log(myString1);
console.log(myString2);
console.log(myString3);
console.log(myString4);
console.log(myString5);
console.log(myString6);


// String Concatenation
var fullName = firstName + ' ' + lastName;
console.log(fullName);

// Access characters in a string
// Works similar to Python, except does not allow for negative indices
console.log(fullName[0]);
console.log(fullName[7]);

console.log(fullName[-1]); // We do not get an error, but instead undefined
console.log(fullName[44]); // We do not get an error, but again undefined


// String Methods

// .toUpperCase method - returns a NEW string with all characters uppercase
console.log(fullName);
console.log(fullName.toUpperCase());

// .toLowerCase method = returns a NEW string with all characters lowercase
console.log(fullName);
console.log(fullName.toLowerCase());

function titleCase(str) {
    var words = str.toLowerCase().split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); 
    }
    return words.join(' ');
}

console.log(titleCase('pLEASE tiTLe CAse tHis StrinG'))

// Finding the length of string
// .length property (not a function like in Python)
console.log(fullName.length);


// To slice a string, use the .slice method
//.slice(indexStart)
//.slice(indexStart, indexEnd)

console.log(fullName);
console.log(fullName.slice(4, 9)); // slice from the 4-index up to but not including the 9-index
console.log(fullName.slice(4)); // slice from 4-index to the end
console.log(fullName.slice(16)); // if indexStart >= str.length -> ''
console.log(fullName.slice(-5)); // negative nums start from the back

// Negative indices does NOT work with bracket notation, must use slice
console.log(fullName[-3]);
console.log(fullName.slice(-3,-2));


// Replacing substrings with the .replace method
console.log(fullName);

console.log(fullName.replace('George', 'Bill'));
// can use regex
console.log(fullName.replace(/[aeiou]/g, matchString => matchString.toUpperCase()));



// Template Literals (the formatted string (f-string) for JS)
// We use backticks (`) to declare a string and then we can use
// ${variableName} to insert variable

var multiLineString = `This is a string
that is written
on multiple lines`

console.log(multiLineString);

var funkMan = `The best funk musician of his time was ${fullName}`;
console.log(funkMan);

var funkMan2 = 'The best funk musician of his time was ${fullName}'
console.log(funkMan2);

// We can have multiple variable in one string

var funkInfo = `The best funk musician of his time was ${lastName}, ${firstName}: ${fullName.toUpperCase()}`

console.log(funkInfo);

console.log(`The best funk musician: ${fullName}`);

// create 3 variables describing your best friend,k then tell us about your best friend using a template string.

var workField = "health care"
var city = "Chicago"
var hobby = "read"

var bestFriend = `My best friend lives in ${city}, they like to ${hobby}, and they work in ${workField}.`;

console.log(bestFriend);

// location overwrote the browser.

console.clear();



// typeof Operator - used to determine the datatype of a variable (not a function, does not need parentheses)

console.log(typeof 'Hello');
console.log(typeof fullName);

// Number Type
// Unlike many other languages, JS only has one numeric data type

var someInt = 123
console.log(someInt);
console.log(typeof someInt);

var someFloat = 3.14;
console.log(someFloat);
console.log(typeof someFloat);


// Mathematical Calculations

// Addition - use the + operator
var sum = 5 + 5
console.log(sum);

sum += 5; // sum = sum + 5 
console.log(sum);

// JS provides the ++ which increments by 1
sum++; // sum += 1 // sum = sum + 1
console.log(sum);


// Subraction - use the - operator
var diff = 10 - 5;
console.log(diff);

diff -= 2; // diff = diff - 2
console.log(diff);

diff--; // diff -= 1 // diff = diff - 1
console.log(diff);

// Multiplication (*), Division (/), and Exponents (**) - same as Python
var prod = 5 * 5;
console.log(prod);
prod *= 5;
console.log(prod);

var quotient = 88 / 22;
console.log(quotient);
quotient /= 8;
console.log(quotient);

var square = 5**2;
console.log(square);
square **= 2;
console.log(square);


// Modulo - remainder - use % operator
var mod = 37 % 8;
console.log(mod);
mod %= 2;
console.log(mod);

// Floor Division - use the built in Math object's floor method
var floor = Math.floor(5/2);
console.log(floor);

var ceil = Math.ceil(5/2);
console.log(ceil);

console.clear()
// Prefix and Postfix ++

var prefixPlus = 1;
console.log(++prefixPlus); // 2
console.log(prefixPlus); // 2

var postfixPlus = 1;
console.log(postfixPlus++); // 1
console.log(postfixPlus); // 2

console.log('Start');

// Prefix
var i = 0;

while (i < 10){
    console.log(i++)
}

console.log('End');
console.log('Start');
// Prefix
var j = 0;

while (j < 10){
    console.log(++j);
}

console.log('End');


// Type Conversion in JS

var myNum = 123;
var myOtherNum = "456";

var added = myNum + myOtherNum;
console.log(added);
console.log(typeof added);

// similar to the int() and str() function in Python, JS has
// parseInt(), parseFloat(), Number(), Number.toString()

var num1 = '47';
console.log(typeof num1);

var num1A = parseInt(num1);
console.log(num1A);
console.log(typeof num1A);

// parse Int on a decimal number will round down to a whole number, use parseFloat
var num2 = '987.65';
console.log(num2);
console.log(typeof num2);

var num2A = parseInt(num2);
console.log(num2A);
console.log(typeof num2A);

var num2B = parseFloat(num2)
console.log(num2B);
console.log(typeof num2B);

// Can also use the Number() constructor function
var num3 = '4983'

var num3A = Number(num3)
console.log(num3A);
console.log(typeof num3A);

// passing in something that cannot convert to a number results in NaN
var notANum = 'this is not a number';
var notANumA = parseInt(notANum);
console.log(notANumA);

// to convert a number to a string == Number.toString() method

var anotherNumber = 734;
console.log(typeof anotherNumber);

var stringNumber = anotherNumber.toString();
console.log(stringNumber);
console.log(typeof stringNumber);


var myNum = 123;
var myOtherNum = "456";

var added = myNum + parseInt(myOtherNum);
console.log(added);
console.log(typeof added);


// JavaScript will try to implicity convert your types
var guessThis1 = '10';
var guessThis2 = '9';

var quiz1 = guessThis1 + guessThis2;
// A. 19 B. 109 C. NaN D. Undefined
// B
console.log(quiz1);


var quiz2 = guessThis1 - guessThis2
// A. 1 b.10 c. 9 d Undefined
console.log(quiz2);

var quiz3 = 10 > '9';
console.log(quiz3);


var quiz4 = '10' > '9';
console.log(quiz4);
// Both valuse are already strings, so no need for type conversion, strings compare alphabetically

