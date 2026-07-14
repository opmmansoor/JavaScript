//DATA TYPES
//Data types tell JavaScript what kind of value a variable stores.JavaScript has two categories 
// of data types: Primitive and Non-Primitive. Primitive data types are String, Number, Boolean, 
// Undefined, Null, BigInt, and Symbol. The main non-primitive data type is Object, and arrays and 
// functions are also objects in JavaScript.

/* JavaScript has 8 data types.  They are divided into 2 categories.

A. Primitive Data Types
Primitive values are simple values. They are immutable (cannot be changed directly).*/


//1. string [ Stores text ]
var person = "mansoor";
let person1 = "mansu";
document.write(person);
document.write("<br>");
document.write(typeof person);
document.write("<br>");

//2. number [ Stores integers and decimal numbers ]
var number1 = 10;
var number2 = 20.254;

document.write(number1);
document.write("<br>");
document.write(typeof number1);
document.write("<br>");

//3. boolean  { Stores only (true or false) two values.}
var js = true;
var html = false;

document.write(js);
document.write("<br>");
document.write(typeof js);
document.write("<br>");

//4. undefined [ A variable is declared but no value is assigned ]
var test1;
let super2;


//5. Null [ Represents an intentional empty value ]
var test2 = null;
let animal = null;

//6. BigInt ( Used for very large integers )
let big = 123456789n;

//7. symbol 
let id = Symbol("id");


//B. Non-Primitive (Reference) Data Type
//8. Object [ Stores multiple related values as key-value pairs ]
let user = {
   name: "Ali",
   [id]: 123
};
console.log(user[id]);

//Array  [ An array is a special type of object used to store multiple values ]
let fruits = ["Apple", "Mango", "Orange"];
console.log(fruits[0]);

//Function [ Functions are also objects in JavaScript. ]
function greet() {
    console.log("Hello");  
}
greet();

//EXAMPLES ;
var person = "john";
document.write(person + "<br>");

person = "Anil";
document.write(person + "<br>");



var  a = 10, b = 20;
document.write(a+b + "<br>");



const pi =3.14;
document.write(pi);
//const pi = 3;  not working already (pi) declared
document.write(pi);


var name = prompt("Enter your name");
alert("Welcome " + name);


//Checking the Data Type  JavaScript provides the (typeof) operator.

let username = "Albi";
console.log(typeof username);