//loop-3

// for loop pattern print reverse
let amal=""
for(let i=4;i>=1;i--){
    amal += i
    console.log(amal);
}


// for loop pattern print (row)
let rows = 5
let pattern=""
for(let n=1; n<=5; n++){
    for (let num=1; num <=n; num++){
        pattern += num;
    }
    pattern += "<br>"; 
}
document.write(pattern);

// for loop pattern print (column)
var row = 5;
var patterns =""
for (var n=1; n<=5; n++){
    for (var num=1; num<=n; num++){
        patterns += n;
    }
    patterns += "<br>";
}
document.write(patterns)



function myFunction(a, b) {
    return a * b
}

let result= myFunction(4, 3);
document.write(result);
