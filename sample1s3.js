//string
var person = "mansoor";
let person1 = "mansu";
document.write(person);
document.write("<br>");
document.write(typeof person);
document.write("<br>");

//number
var number1 = 10;
var number2 = 20.254;

document.write(number1);
document.write("<br>");
document.write(typeof number1);
document.write("<br>");

//boolean
var js = true;
var html = false;

document.write(js);
document.write("<br>");
document.write(typeof js);
document.write("<br>");

//undefined
var test1;

//Null
var test2 = null;

//symbol
let id = Symbol("id");
let user = {
   name: "Ali",
   [id]: 123
};
console.log(user[id]);

var person = "john";
document.write(person + "<br>");

person = "Anil";
document.write(person + "<br>");

var  a = 10, b = 20;
document.write(a+b + "<br>");

const pi =3.14;
document.write(pi);
pi = 3;
document.write(pi);


var name = prompt("Enter your name");
alert("Welcome " + name);


