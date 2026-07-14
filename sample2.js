//FUNCTION [ A function is a reusable block of code that performs a specific task ]
//Instead of writing the same code many times, you write it once inside a function and call it 
// whenever you need it.


//Simple function 
function message(){
    console.log("Hai")
}
message();


//Function with Parameter
function greetings(name){
document.write("AL HADI " + name + "<br>")
}
 greetings("sir");


//function with Parameters
function sum(n1, n2){
    document.write(n1+n2 + "<br>")
}
sum(10,20) ;


//function with return value
function total(n1, n2){
    return n1-n2
}
var result = total(15, 10);
document.write(result + "<br>")

/*Parameters
Parameters receive values.
(name)

Arguments
Arguments are the actual values passed.*/