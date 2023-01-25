//Conditionals

let num = -6;
if (num > 0) {
    console.log(`${num} is a positive number.`)
}
else if(num < 0){
    console.log(`${num} is a negative number.`)
}
else{
    console.log(`${num} is a zero.`)
}


//Switch
let num1 = 6;
switch (num1) {
    case 8:
        console.log("num1 == 8 ")
            break;
     case 9:
        console.log("num1 == 9 ")
            break;
     case 10:
      console.log("num1 == 10 ") 
            break;
    default:
        console.log(` num1 == ${num1} `)
        break;
}

let num2 = prompt("Enter a number.")
switch (true) {
    case num2 > 0:
        console.log("Number is positive")
        break;
    case num2 == 0:
        console.log("Number is zero")
        break;    
    case num2 < 0:
        console.log("Number is negative")
        break;
    default:
        console.log("Value is not a number")
        break;
}

//Examples

let age = prompt("Enter your age :")
 if (age >= 18 ) {
    console.log("You are enough to drive")
 } else {
    console.log(`You are wait ${18 - age} years to drive`)
 }


 let num4 = 33
 if ((num4 % 2) == 0) {
    console.log(num4 ,"is a even number ")
 } else {
    console.log(num4 ,"is an odd number")
 }



 let point = 65;
 if (point >= 80 && point <= 100) {
    console.log("A")
 }
 else if(point >= 70 && point <= 79){
    console.log("B")
 }
 else if(point >= 60 && point <= 69){
    console.log("C")
 }
 else if(point >= 50 && point <= 59){
    console.log("D")
 }
 else if (point >= 0 && point <= 49){
    console.log("F")
 }
 else{
    console.log("Value is invalid")
 }

 let monthDays = new Date(2023,1,0).getDate()
 console.log(monthDays)