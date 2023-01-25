//BOOLLEAN

let isLigthOn = true;
let inHungry = false;
let value1 = 4<6;
let value2 = 4>6;

console.log(isLigthOn,inHungry,value1,value2)

// OPERATORS

let name = "Seckin";
let country = "Turkey";

let a = 5;
let b = 10;
a += b;
a *= b;
a -= b;
a %= b;

//cOPMARASION OPERATORS
console.log("Comparasion operators")
let c,d;
c == d;   // is equal
c === d;   // is equal value and data type 
c != d;   // is not equal
c < d;   // less than
c > d;   //greater than
c <= d;   // less than or equal
c >= d;   //greater than or equal


console.log(1 === true)
console.log("mango".length == "lemon".length)
console.log("banana".length == "strawberry".length)
console.log("mango".length !== "tomato".length)
console.log("banana".length > "strawberry".length)


//LOGICAL OPERATORS
console.log("Logical operators")
console.log("and")
console.log( 10 > 5 && 8 < 3);
console.log( 10 > 5 && 8 < 20);
console.log( 2 > 5 && 1 < 3);

console.log("or");
console.log( 0 > 5 || 8 < 3);
console.log( 10 > 5 || 8 < 20);
console.log( 2 > 5 || 1 < 3);
console.log(" not")
let isMarried = !false;
console.log( 4 > 3 )
console.log( !(4 > 3) )

// Increament operators

let count = 0;
let count2 = 0;
console.log("pre increment", ++count);
console.log( "post increment",count ++);
console.log( "post increment",count2 ++);
console.log("pre increment", ++count2);

//Ternary operators.

let isOnline = false;
isOnline 
? console.log("You are online.")
: console.log("You are offline.")
 

//WİNDOW METHODSS

function myAlert(){
    alert("Welcome javascript")
}

function myPrompt(){
    prompt("Please add a number : ","Positive number")
}

function myConfrim() {
    confirm("Is verified ?")
}


//Data object 

let date = new Date(); 

let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

console.log(date.getFullYear(),date.getMonth(),date.getDay(),date.getHours(),date.getMinutes(),date.getSeconds())

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
 
let realDate = `${day} ${months[month]} ${year} ${days[day-1 ]}, ${hour}:${minute}:${second}`

console.log(realDate)



// exampless

function calculateArea() {
let base = prompt("Give me a base.");
let height = prompt("Give me a height.");
const area = (0.5 * base * height);
alert(`Triangle are : ${area}`);
}

function salaryCount(){
    let workHours = prompt("How much hours work ");
    let workDay = prompt("How much days work ");
    let salary = (workHours * workDay)
    alert(`Your weakly earning is ${salary} $`)
}

function nameLength() {
    let name = prompt("Tell me a name.");
    let surName = prompt("Tell me a surname.");
    alert(`${(name.length > 7 ) ? "Your name is longer":"Your name is shorter"} 
    ${(name.length > surName.length) ? "Your name is longer than surname.":"Your surname is longer than name."}`)
}

function isLegal() {
    let date = new Date();
    let birth = prompt("Enter the birth year.")
    let age = date.getFullYear() - birth;
    alert(`${((age) >=18)
    ? `You are ${age}. You are old enough to driver license.`
    : `You are ${age}. You will be allowed driver license after ${18 - (age)} years.`}`)
}
