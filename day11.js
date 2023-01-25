//destruccturing array

const numbers =[65,151,14,5]

const [num1, ,num3] = numbers   //skip the index use , , 
console.log(num1,num3)  
        //65,14
const names = ["Seçkin","Ali","Ahmet","Ayse","Zeki"]
const [firstName,...otherNames] = names       // rest operator 
const [name1,name2] = names
console.log(name1,name2)
console.log(firstName , otherNames)

const web = [
    ["html","css","javascript"],
    ["c++","c#"],
    ["php","java"]
]
const [frontEnd,backEnd] = web 
const [[first,second],third] = web 

console.log(frontEnd,backEnd)
console.log(first,second,third)

const countries = [["Turkey","Ankara"],["Spain","Barcelona"],["Brazil","Rio"],["Norway","Oslo"],["France","Paris"]]

for (const [country , capital] of countries) {
    console.log(`Country : ${country} , Capital : ${capital}`)
}



////destruccturing object

const user = {
    name: "Seçkin",
    age:24,
    hobies:["Movie","Bike","Running"],
    height:60,
  //  width: 150,

}

const {name,age,hobies,width = 170} = user            //width default values 170 then add a new values
console.log(name,age)
console.log(hobies)
console.log(width)

function showUser() {
      return `Hi, i am ${user.name}, ${user.age} years old. I like to ${user.hobies}.`  
}

console.log(showUser())

//spread and rest operators

const nums = [5,6,7,6,1,7,11,1]
let [n1,n2,...others] = nums
console.log(n1,n2)
console.log(others)

const numbers2 = [...nums]           // we use rest operator because protected main value
numbers2.push(50)
console.log("nums",nums)
console.log("numbers2",numbers2)


const person = {
    name:"Seçkin",
    surname:"Bulgur",
    age:24
}

const person2 = {...person}          // rest operators 
person2.name = "Ayse"
person2.surname = "Gunes"


console.log(person)
console.log(person2)


const nums3 = [5,6,7,1,3]

console.log(
    [34,...nums3,52]
)