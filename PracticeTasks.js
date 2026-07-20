//1. Find Largest Among Two Numbers

var a = 10;
var b = 20;
if(a > b){
document.write("a" +" is larger")
}else{
    document.write(b +" is larger")
}

//2.Find Largest Among Three Numbers
var a = 10;
var b = 45;
var c = 25;

if (a > b ){
    console.log(a + " is larger");
}else if(b > c){
    console.log(b + " is larger");
}else{
    console.log(c + " is larger");
}


//3. Check Even or Odd
var num = 6;
function checking (num){
    if (num % 2 == 0){
        return "Even";
    }else{
        return "odd";
    } 
}    
result = checking(num);
console.log(result);


//4. Check Positive, Negative, or Zero
var num = -5;
if (num<0){
    console.log("Negative Number");
}else if(num>0){
    console.log("positive Number");
}else if(num == 0){
    console.log("ZERO")
}


//5. Sum of Numbers from 1 to 100
var i;
var sum = 0;
for (i=1; i<=100; i++){
    sum = sum + i;
}   
console.log(sum);


//6. Find Factorial of a Number
var num = 5;
var n;
function Factorial(num){
    var result = 1;
    for (n=1; n<=num; n++){
        result = result * n;
    }
    return result; 
}
 
console.log(Factorial(num));
