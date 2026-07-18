// loops - 2

//working with arrays:
const cars = ["bmw","saab","volvo","benz","foard"];
let text = "";
for (var i = 0; i<cars.length; i++){
    text += cars[i] + "\n";
}
console.log(text);

// for loops
for(var i=1; i<=5; i++){
    document.write( "Hello" + "<br>");
}

for(var i=1; i<=5; i++){
    console.log(i);
}
for(var i=10; i<=15; i++){
    document.write( i + "<br>");
}

// while loop
var i =1;
while(i<=4){
    console.log(i )
    i++;
}
var i=1;
while(i<=5){
    document.write("hai" + "<br>");
    i++;
}
var i = 10;
while(i>=1){
    document.write(i +"<br>");
    i--;
}

// do while loops
var i = 1;
do{
    document.write("GOOD" + "<br>");
    i++
}while(i<=5);

let j = 5;
for (let j = 0; j < 10; j++) {
 console.log(j);
}




let man = "";
for (let h = 1; h <= 5; h++) {
    man += ""+h;
 console.log(man + "\t");
}



let rows = 5;
let pattern = "";

for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= n; num++) {
      pattern += num;
   }
   pattern += " " + "\n";
} 
console.log(pattern);
