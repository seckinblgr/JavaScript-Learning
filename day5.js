//Arrays

const arr = []
console.log(arr)

const fruits = ["orange","banana","mango","melon"]
console.log(fruits)
console.log(fruits.length)

const strings = "Javascript";
console.log(strings.split(""))

const companies = "Apple,Intel,IBM,Samsung,Oracle,Microsoft";
let companiess = companies.split(",")
console.log(companiess)
console.log(typeof(companiess))


let names = Array(20) // empty but 20 index 
console.log(names)

let name1 = Array(10).fill("Loading")
console.log(name1)

// concat

const listFirst = [5,9,5,"Seckin"]
const listSecond = [0,6,"Bulgur"]
const listThird = [0.0,65,6,100]
const listFinal = listFirst.concat(listSecond,listThird)
console.log(listFinal)

//length
console.log(listFinal.length)

//indexof
console.log(listFinal.indexOf(3))           //this item is not here  -1
console.log(listFinal.indexOf("Seckin"))     // 3. index
console.log(listFinal.lastIndexOf(6))      // last 6 value . which index?

//includes

console.log(listFinal.includes(65))         //true 
console.log(listFinal.includes(3))          //false  value is not include this array.

//is array
console.log(Array.isArray(listFinal))         // is array validation

//Tostring
console.log(listFinal.toString())           //array to string 

//join

let numbers = [5,2,5,9,3,6]
console.log(numbers.join(""))
console.log(numbers.join(" "))
console.log(numbers.join(","))
console.log(numbers.join("."))
console.log(numbers.join("-"))

//slice 
console.log(numbers.slice(0))
console.log(numbers.slice(0,4))
console.log(numbers.slice(2,numbers.length))

//splice
console.log(numbers.splice())
console.log(numbers.splice(0,1))

//push
console.log(numbers.push("Seckin"))   //add a item to end
console.log(numbers.push("Bulgur"))
console.log(numbers.push(24))
console.log(numbers)

//pop
console.log(numbers.pop())   //remove a item to end
console.log(numbers.pop())
console.log(numbers)

//shift

console.log(numbers.shift()) // remove a item to start
console.log(numbers.shift())
console.log(numbers)


//unshift
console.log(numbers.unshift("Start"))   //add a item to start
console.log(numbers.unshift(58))
console.log(numbers.unshift("Aly"))
console.log(numbers.unshift(12))
console.log(numbers.unshift(22))
console.log(numbers)

//reverse
console.log(numbers.reverse())   //reverse a array

//sort
console.log(numbers.sort())   //sort the a-z 

let multipleArray = [25,6,"Seckin",[56,312],["Bulgur",53,34]]

console.log(multipleArray)
console.log(multipleArray[4])
console.log(multipleArray[4][0])


//example
console.log(numbers)
console.log(numbers[0])                                          //first item
console.log(numbers[numbers.length-1])                           //last item
console.log(numbers[Math.floor(numbers.length / 2 )])            //middle item

console.log(numbers.toString().toUpperCase().split(","))         // uppercase array
console.log(numbers.toString().toLowerCase().split(","))        //lowercase array

const ages = [15,25,36,14,21,96,22,24,47,60]
console.log(ages.sort())                                       //sorted ages 
console.log(Math.max(...ages))                                  // max age value in array
console.log(Math.min(...ages))                                  //min age value in array
let sum = ages.reduce((a,b) => a+b,0);
let avg = (sum / ages.length ) || 0;
console.log("Ages sum:",sum)
console.log("Ages average :",avg)
