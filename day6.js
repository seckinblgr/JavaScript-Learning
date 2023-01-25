//Loops

//for
 for (let i = 0; i <= 5; i++) {
    console.log(i)
 }
console.log(" ")

 for (let i = 10; i >= 5; i--) {
    console.log(i)
 }
 console.log(" ")

 const names = ["Seckin","Mehmet","Aylin",25,35,20]

 for (let i = 0; i < names.length; i++) {
        console.log(names[i])
 }

 const numbers = [15,63,25,21,74]
 let sum = 0;
 for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
 }console.log("Numbers sum :",sum)

 let country = ["Turkey","Abd","Sweden","Spain","Brazil"]
 let newArr = [];

for (let i = 0; i < country.length; i++) {
   newArr.push(country[i].toUpperCase()); 
} 
console.log(newArr)

//while
let i = 0;
while (i <= 5 ) {
    console.log("While",i)
    i++
}

//do-while

let z = 0;
do {
    console.log("Do-while",z)
    z++
} while (z <= 5)


//break

for (let i = 0; i < 10; i++) {
    if(i == 6){
        break;
    }
    console.log(i)
    
}

console.log("")


//continue

for (let i = 0; i < 7; i++) {
    if ( i == 4 || i == 5 ) {
        continue
    }
    console.log(i)
}
console.log("")

//examples

for (let i = 0; i < 11; i++) {
    console.log(`${i} x ${i} = ${i *i}`)
}
console.log("")

for (let i = 0; i < 11; i++) {
    console.log(`${i}  ${i**2}  ${Math.pow(i,3)}`)
}
console.log("")

for (let i = "*"; i.length < 8; i += "*") {
   console.log(i)

}
console.log("")

for (let i = 0; i <20; i++) {           // only even number
    if (i % 2 == 0) {
        console.log(i)
    }
    
}
console.log("")                         //only odd number
for (let i = 0; i <20; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
    
}
console.log("")
let result = 0;
for (let i = 0; i <= 20; i++) {
   result += i;
    if(i == 20){
        console.log("Sum of 0 - 20 :",result)
    }
}
console.log("")

const countries = ["iceland","belgium","poland","newzeland","spain","turkey"]
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("land")) {
         const land = countries[i]
        console.log(land)
    }
}



