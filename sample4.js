//SWITCH
//The switch statement is a conditional statement used to compare one value with multiple possible
//  values.

var a = "C" ;
switch(a){
    case"A":
     document.write("Apple");
     break;
    case"B":
     document.write("Bat");
     break;
    case"C":
     document.write("Cat") 
     break;
    default:
     document.write("Invalid Character");
     break;
}

//TASK
let day="1";
switch(day){
    case "1":
        console.log("Today is Sunday");
        break;
        case "2":
            console.log("Today is Monday");
            break;
            case "3":
                console.log("Today is Tuesday");
                break;
                case  "4":
                    console.log("Today is Wednesday");
                    break;
                    case "5":
                        console.log("Today is Thursday");
                        break;
                        case "6":
                            console.log("Today is Friday");
                            break;
                            case "7":
                                console.log("Today is Saturday");
                                break;
                                default:
                                    console.log("Invalid day number. Please enter a number from 1 to 7.")
                                    break;
}                            



//break immediately exits the switch statement.
//Because there is no break, JavaScript continues executing the remaining cases.
//default?
//default is like the else block.  It runs when no case matches.


// if...else → Conditions and ranges
// switch → Exact values