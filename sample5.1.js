//LOOP [ A loop is used to repeat a block of code multiple times until a condition becomes false.
//       Without loops, you would have to write the same code again and again.]


//1. for Loop
//( Used when you know how many times to repeat.)

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//2. while Loop
// Runs while the condition is true.

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}


//3. do...while Loop
//Runs at least one time, even if the condition is false.

let k = 6;
do {
    console.log(k);
    k++;
} while (k <= 5);

//Infinite Loop
//A loop that never stops.

//Nested Loop
//A loop inside another loop.


for(let i = 1; i <= 5; i++){
  for(let j = 0; j<=5; j++){
      text = j + i;
  }
    console.log(text);
}


//MULTIPICATION 
//1 x 10 = 10
//2 x 10 = 20 

let n ;
for (n = 1; n <= 10; n++){
    console.log(n +" x 10 = " +(n*10))
}


//PATTERN LOOP
//*****
//*   *
//*   *
//*   *
//*****
var I;
var j;
var row;

for (I=1; I<=5; I++){
    row = "";
    for (j = 1; j<=5; j++){
        if (I == 1 || I == 5 || j == 1 || j== 5){
            row = row + "*";
        }else{
            row = row + " ";
        }
    } console.log(row);
    
}

//11111
//2   2
//3   3
//4   4
//55555
var a;
var j;
var row;

for (a=1; a<=5; a++){
    row = "";
    for (j = 1; j<=5; j++){
        if (a == 1 || a == 5 || j == 1 || j== 5){
            row = row + a ;
        }else{
            row = row + " ";
        }
    } console.log(row);
    
}
//*****
//*****
//*****
//*****
//*****
 var a;
 var row;
 var j;
 for (a=1; a<=5; a++){
     row = "";
     for(j=1; j<=5; j++){
         row = row + "*";
     }
     console.log(row)
 }