//OPERATERS [ An operator is a symbol that tells JavaScript to perform an operation on one or 
// more values (called operands) ]

//1.Arithmetic Operators

let a = 10;
let b = 5;

// Addition
console.log(a + b); // 15

// Subtraction
console.log(a - b); // 5

// Multiplication
console.log(a * b); // 50

// Division
console.log(a / b); // 2

// Modulus (remainder)
console.log(a % b); // 0

// Exponent (power)
console.log(a ** 2); // 100



//2. Assignment Operators  [ Used to assign values ]

//add and assign
var x = 10;
var result = x +=4;
document.write(result + "<br>");

//substract and assign
var x = 10;
var result = x -=4;
document.write(result + "<br>");

//multiple and assign
var x = 10;
var result = x*=4 ;
document.write(result + "<br>");

//divide and assign
var x = 10;
var result = x /=4;
document.write(result + "<br>");

//modulus and assign
var x = 10;
var result = x %=4;
document.write(result + "<br>");





//3. Comparison Operators  [ Compare two values ]
//Result is always true or false.

//Equal to
var ab = 10;
var bc = 20;
document.write(ab == bc + "<br>");
document.write( ab == 10)


//Identical
var y = 20;
var z = 20;
document.write(y === z);


//Not Equal to
var y = 20;
var z = 50;
document.write(y != z);


//Greather than
var c = 20;
var d = 50;
document.write(c < d);


//Less than
var f = 20;
var e = 50;
document.write(f > e);


//Greater than or Equal to
var cd = 60;
var bc = 50;
document.write(cd >= bc);


//Less than or Equal to
var cd = 60;
var bc = 50;
document.write(cd <= bc);




//4. Logical Operators  [ Used to combine conditions ]

//Logical and
var ap = 60;
var bp = 50;
document.write(ap == 60 &&  bp == 50);


//Logical or
var ap = 60;
var bp = 8;
document.write(ap == 60 ||  bp == 50);


//Logical Not
var ap= 60;
var bp = 50;
document.write(!(ap == 60));