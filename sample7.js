//DOM - (Document Object Model)
//DOM (Document Object Model) is a way for JavaScript to access, read, and change HTML elements on a web page.


//DOM Methods
// These are the most commonly used methods.
// getElementById
var a = document.getElementById("head1")
a.innerHTML = "learn JavaScript";
a.style.color = "green";
a.style.color = "blue";

// getElementByClassName
var b = document.getElementsByClassName("head2");
console.log(b);
b[0].innerHTML = "GOOD EVENING";
b[2].style.color = "red";

// getElementBy Tag Name

var a = document.getElementsByTagName("h4")
console.log(a)
a[0].innerHTML = "HAPPY"

// getElementBy Name
var a =document.getElementsByName("text")[0];
console.log(a)
var b = document.getElementById("head");


function message(){
    b.innerHTML = "Hallo " + a.value;
}

// getElementBy QuerySelectorAll ( CSS selectors )
//TAG Access
var x = document.querySelectorAll("h1");
x[0].innerHTML = "What";
x[1].style.color = "orange";
x[1].onmouseover = function(){
    x[1].style.color = "white";
}

//CLASS NAME ACCESS
var x = document.querySelectorAll(".head2");
console.log(x);
x[0].innerHTML = "java"
x[1].style.color = "gray"


//ID NAME ACCESS
var x = document.querySelectorAll("#head");
console.log(x);
x[0].innerHTML = "java script";
