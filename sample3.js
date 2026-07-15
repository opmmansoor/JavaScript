// CONDITION STATEMENT [ this used to make decisions in JavaScript. ]
//[ It checks a condition. If the condition is true, one block of code runs. If it is false, 
// another block can run. 
/*Conditional statements are decision-making statements in JavaScript. They evaluate a condition 
and execute different blocks of code based on whether the condition is true or false. JavaScript 
provides if, if...else, if...else if...else, switch, and the ternary operator to control the flow 
of a program.*/

// if  [ Is this condition true? Runs code only if the condition is true]
var a = 10;
if (a > 0){
    console.log("positive Number");
}

var age = 20;
if (age>=18){
    console.log("Adult");
}


// if else Condition [ Runs one block if true and another if false ]
var a = -10;
if (a > 0){
    document.write("positive Number");
}else{
    document.write(" Negitive Number");
}


var age = 15;
if(age>=18){
    console.log("Adult");
}else{
    console.log("Minor");
}



// if else if Condition  [Checks multiple conditions.]
var a = 0;

if (a > 0){
    document.write("positive Number");
}else if(a < 0){
    document.write(" Negative Number");
}else{
    document.write(" Zero");
}


let mark = 80;
if(mark >= 90){
    console.log("A Grade");
}else if(mark >= 80){
    console.log("B Grade");
}else{
    console.log("false");
}


//TERNARY Operation  [Short form of if...else.]

var age = 1;
var result = age >=18 ? "Adult":"Minor"
console.log(result);

let price = 10;
let product = price >= 100 ? "Luxuary":"Normal"
console.log(product);

let marks = 50;
console.log(marks >= 50? "pass":"fail");