//high order functions

const callback = (n) =>{
    return n ** 3;
}
function cube(callback,n) {
    return callback(n) * n;
}

console.log(cube(callback,2))

const a = s1 => {
    const b = s2 =>{
        const c = s3 =>{
            return s1+s2+s3;
        }
        return c;
    }
    return b;
}
console.log(a(5)(4)(10))

//foreach

const numbers = [64,8,54,7]
let total = 0
numbers.forEach(number => total += number)
console.log(total)


//setting time
//setInterval  = loop to value seconds
//setTimeout   = after work to seconds
//clearinterval
//cleartimeout


const sayHi = () => {
    console.log("Hello dev.")
}
const sayH = () => {
    console.log("Hello devoloper.")
}

//setInterval(sayHi,2000)   
//setTimeout(sayH,5000)

const countries = ["Turkey","Ukraine","Russia","Spain","Abd"]
console.log("")
countries.forEach((e) => console.log(e.length))
countries.forEach((e) => console.log(e))
console.log("")
countries.forEach((e) => console.log(e.toUpperCase()))

//map

 const newCountries = countries.map(e => e.toLowerCase())
 console.log(newCountries)

 let users = [
    {
        id: 3,
        name: "Seçkin",
        age: 24,
        gender: 1
    },
    {
        id: 2,
        name: "Ayse",
        age: 54,
        gender: 0

    },
    {
        id: 9,
        name: "Faruk",
        age: 28,
        gender: 1

    },
    {
        id: 4,
        name: "Veli",
        age: 8,
        gender: 1

    }
 ]

 user = users.map(user => {
    if (user.id === 3) {
        user.name = "Berkay"
    }
    return user
 })

 

 const male = users.filter(user => user.gender === 1 && user.age >= 25)
 const female = users.filter(user => user.gender === 0  )

 console.log(users)
 console.log(female)
 console.log(male)

//reduce 

const nums = [15,65,67,2,1,4,35,]

console.log("Array sum ;",
    nums.reduce((old , now) => {
        return  old + now
},0))                                       // start value 0 


//every 

const names = ["Seçkin","Ahmet","Berkay","Yusuf"]
const isString = names.every((name) => typeof name ==="string")
console.log("is all of string ",isString)

const isFemale = users.every((user) => user.gender === 0 )
console.log("Every female",isFemale)

//some
const isFemalee = users.some((user) => user.gender === 0 )
console.log("Some female",isFemalee)

//find 
const ages = [15,65,34,75,65,12]
const age = ages.find((num) => num <= 20 )
console.log(age)

const userİd = users.find((user) => user.id === 2)
const userİndex = users.findIndex((user) => user.id === 2)
console.log(userİd)
console.log(userİndex)


//sort

const products = ["Apple","Samsung","Beko","Hyundai","Zellar","Tucson"]     
const nums2 = [15,35,3,18,1878,165,5,3,1.3]

console.log(products.sort())                         // sorting a - z
console.log(products.sort().reverse())              // sorting z - a
const sorted = nums2.sort((a,b) =>  a - b )    // sorting 0 -> 9999
console.log(sorted)

const sortedd = nums2.sort((a,b) => b - a )    // sorting 9999 -> 0
console.log(sortedd)

const userSort = users.sort((a,b) => a.id - b.id)  
console.log(userSort)

const userSortt = users.sort((a,b) => b.id - a.id)  
console.log(userSortt)

console.log(users.sort((a,b) => a.name.localeCompare(b.name)))      // object string sort  a - z
console.log(users.sort((a,b) => b.name.localeCompare(a.name)))      // object string sort  z - a