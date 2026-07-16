
//Object  [ An Object is a collection of key-value pairs.]

//An object is a non-primitive data type in JavaScript that stores data as key-value pairs. It is 
// used to represent real-world entities like a person, a car, or a product. Properties can be 
// accessed using dot notation or bracket notation.

let student = {
   name: "Ali",   //name = key , "Ali" = value
   age: 20,
   place: "Kerala"
};
student.age=22;
console.log(student.name+" "+student.place);
console.log(student.age);    //value chainging

const car = {
  type:"Fiat",
  model:"500",
  color:"white"
};
document.write(Object.entries(car)); //full value calling

//ADD new property
let person = {
    name : "Amal",
    age  : 21,
    city : "canada"
}
console.log(person);

person.job = "Frontend Developer"; // ADD job
console.log(person);

//Update a Property
person.age = 25;   // Updating age
console.log(person.age);

//Delete a Property
delete person.city;
console.log(person);



//Object with a Function (Method)
let personal = {
    name: "Mansoor",

    greet: function () {
        return "Hello";
    }
};

console.log(personal.greet());