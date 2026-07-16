//ARRAY
//An array is a special type of object that stores multiple values in a single variable.
//Instead of creating many variables, you can store all related values in one array.
//Array index starts from 0.
//Arrays Can Store Different Data Types

// Create an array
let fruitss = ["Apple", "Mango", "Orange"];

// Print the whole array
console.log(fruitss);

//Changing an Element
fruitss[1] = "Banana";
console.log(fruitss);   //Output (Mango changed) [1]Banana  

//Array Length
console.log(fruitss.length);

//push()   [ Adds an element at the end.]
fruitss.push("Plum");
console.log(fruitss);

//pop()  [ Removes the last element.]
fruitss.pop();
console.log(fruitss);



//Nested Array
let nums = [
    [1, 2],
    [3, 4]
];

console.log(nums[1][0]);


//array running with LOOP

let fruits=["mango","apple","plum"];
document.write("<br>" + fruits);
console.log(fruits.length)
console.log(fruits[fruits.length-1])

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//Numbers array running with LOOP

let num = [1,2,3,4,5,6];
for(let i = 0; i < num.length; i++){
    console.log(num[i]);
}


//Array Sum and Average
let numbers = [10,20,30,40,50,60];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
let average = sum/numbers.length
console.log("sum =",sum);
console.log("average =", average);


const cars = new Array("Saab", "Volvo", "BMW");
console.log(cars);

//ARRAY with list
var soap = ["apso","santoor","cutty"];
var text = "<ol>";
for (let i=0; i< soap.length; i++){
    text += "<li>" + soap[i] + "</li>";
}
text += "</ol>"
document.write(text);
console.log(soap.sort());