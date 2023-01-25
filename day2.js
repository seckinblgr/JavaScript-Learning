let num1 = 3                   // primitive data typess 
let num2 = 3
console.log(num1 == num2)

let js = "Javascript"
let py = "Python"
console.log(js == py);

let others = [5,6,7,0,"seckin",["bulgur",24],null]       // non-primitve data typess
console.log(others)
console.log(others[4])
console.log(others[5][0])
others[0] = 52;

let arr1 = [1,2,3]; 
let arr2 = [1,2,3];
console.log( "arr1 == ? arr2 :",arr1 == arr2)

let user1 = {                                                     
    name : "Seckin",
    surname : "Bulgur",
    age : 24,
    country : "Turkey"
}

let user2 = {
    name : "Seckin",
    surname : "Bulgur",
    age : 24,
    country : "Turkey"
}

let user3 = user2; 
console.log(user3 == user2)             //true 
console.log(user1 == user2)             //false , because non-primitive

// math. fonctions

console.log(Math.PI)
console.log(Math.round(6.6)) 
console.log(Math.floor(5.8))       // down 
console.log(Math.ceil(5.8))       // up 
console.log(Math.min(5,6,1,-5,0,-11,66))
console.log(Math.max(5,6,1,-5,0,-11,66))

let rng = Math.random();       // 0 - 0.9 
console.log(rng)

let randomnumber = Math.floor(Math.random() * 101) ;   // specific range number generator. 0 - 100 
console.log(randomnumber)
console.log(Math.sqrt(36))   // return 6 
console.log(Math.pow(5,3))   // return 125  or  -->  console.log(5 ** 3)    
      
let lorem = "Hello this multi \
line paragraph \
work together ";
console.log(lorem)

// template litarets

let name = "Seçkin"                          
let surName = "BULGUR"
let birthdayDate = 1997
let nowDate = 2022
let fullName =  `My name is ${name} ${surName}.
My age : ${nowDate - birthdayDate}`
console.log(fullName)


// string methods

let key = "javascript"
console.log(key[2])    //2. index
console.log(key.length)   
let lastindex = key.length - 1;
console.log(key[lastindex])

console.log("seckin".toUpperCase())
console.log("ADQWD".toLocaleLowerCase())

let string = "Merhabalar";           
console.log(string.substr(7,3))         // first index sonrasını al . 2. index kadar yaz   == lar

let string2 = "Hello javascript learning."

console.log(string2.split());
console.log(string2.split(""));
console.log(string2.split(" "));

let string3 = "My name is cekin bulgur how are you";

console.log(string3.includes("you"))   // true 
console.log(string3.includes("hi"))   // false

let string4 = "30 days javascript";                 
console.log(string4.replace("javascript","c++"))          // first index replace with second index

console.log(string4.indexOf("java"))        // 
console.log(string4.indexOf("days"))
console.log(string4.indexOf("da"))
console.log(string4.indexOf("black"))
console.log(string4.indexOf("ok"))

let ipsum = "Love yourself";
console.log(ipsum.startsWith("love"))       
console.log(ipsum.startsWith("Love"))         // ipsum  start with Love == true  

console.log(ipsum.endsWith("elf"))      // ipsum with ends elf  == true 
console.log(ipsum.endsWith("you"))


let loremm = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet lorem diam. Duis at pharetra ante, a feugiat felis. Etiam vel maximus lacus, et facilisis metus. Duis velit urna, faucibus id magna in"

console.log(loremm.match("diam"))  
console.log(loremm.match(/diam/g))  // search all loremm
console.log(loremm.match(/diam/gi)) // search all lorem  and upper or lower specific.

let string5 = "Lorem all of us.\n"
console.log(string5.repeat(3))


//   CHECKİNG DATA TYPES

let num3 = "15651";
console.log(typeof(parseInt(num3)))      // number
console.log(typeof(num3))                // string

let num4 = "15651.115";
console.log(typeof(parseFloat(num4)))      // number
console.log(typeof(num4))   
