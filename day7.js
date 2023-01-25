function sayHi() {
    console.log("Hi")
}
sayHi();

function fullName() {
    let firstName = "Seçkin"
    let lastName = "Bulgur"
    let age = 24
    let info = `${firstName} ${lastName}, ${age}` 
    return info
}
console.log(fullName())

function multiply(num1,num2){
    let result = num1 * num2
    return result
}
console.log(multiply(5,6))

function cirleArea(r){
    let area = Math.PI * r * r
    return area
}
console.log(cirleArea(6))

const ages = [9,10,45,57,1,56,67,5]
function sumArray(array){
    let total = 0;
   for (let i = 0; i < array.length; i++) {
        total += array[i]
   }
    return total
}
console.log("Total :",sumArray(ages))


//unlimited parameters function

function sumWithArguments(){
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}
console.log("Total :",sumWithArguments(5,3,7,6,100,63))


// function with nameless 

const sayHello = function(name){
    return `Hi ${name}`
}
console.log(sayHello("Seçkin"))


//arrow funtion

function sum(num1 , num2){                                    //regular function
    return  `Regular : ${num1} + ${num2} = ${num1+num2} `
}
console.log(sum(6,8))

const sumWithArrow = (num1,num2) => {                         // arrow function
    return `Arrow : ${num1} * ${num2} = ${num1*num2}`
}
console.log(sumWithArrow(5,6))

const sum2 = (...numbers) => {                                 //arrow function with many paramaters
    return console.log("Numbers",numbers)
}
sum2(6,8,2,4,3,4)


const square = n => n * n;                                         //one line arrow function
console.log("Pow :",square(5))


const printName = (name,surname) => {
    return `${name} ${surname}`
}
console.log("Full Name :",printName("Seçkin","Bulgur",))

const mathEx = (num1, num2 = 5) => {             // function with two parameters but incoming one value 
    return num1 * num2
}
console.log("Num1 * Num2 =",mathEx(5))

let date = new Date()
const calculateAge = (birthYear , currentYear = date.getUTCFullYear()) =>{
    return `Your age = ${currentYear - birthYear} in this year.(${date.getUTCFullYear()})`
}
console.log(calculateAge(2000))

const convertCelsiusToFahrenheit = (num) =>{
    return `${num} CELSIUS == ${Math.floor((num * 9/5) + 32)} FAHRENHEIT`
}
console.log(convertCelsiusToFahrenheit(-45))


// Calculate BMI

const BMI = (wei,hei) => {
    let bmi = (wei / (hei*hei));
    if (bmi <=18.5) {
        return "Underweight"
    }
    else if(bmi <=24.9 && bmi >=19)
    {
        return "Normal weight"
    }
    else if(bmi <=29.9 && bmi >=25)
    {
        return "Overweight"
    }
    else if(bmi >=30)
    {
        return "Obese"
    }
    else{
        return "Wrong parameters"
    }
}
console.log(BMI(90,1.80))


const nums = [62,550,51,0,14,72]      // reverse array with function

const reverse = (array) =>{
    let reverseArray = [];
    for (let i = array.length-1; i>=0;  i--) {
        reverseArray.push(array[i])
    }
    return reverseArray;
}
console.log(reverse(nums));

//rgb color generator

const rgbColorGenerator = (...number) =>{
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    return `rgb(${r},${g},${b})`
}
console.log(rgbColorGenerator())