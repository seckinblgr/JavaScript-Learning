name1 = "Seçkin"                 // windows scope
let a = "Javascript"            // global scope
let name = "Seçkin"
let surname = "Bulgur"

function learnScope() {
    if (true) {
        let name = "Amhet"              // local scope
        let surname = "Bolar"
        console.log(name,surname)
    }
    console.log(name,surname)
}
learnScope()
console.log(name,surname)


//OBBJECT

const person = {
    name: "Seckin",
    surname : "Bulgur",
    age: 24,
    country: "Turkey",
    phone: "05467355117",
    isMarried: false,
    "zip code": 34000,
    skills : [
        "html",
        "css",
        "javascript",
        "react"
    ],
    hobbies: {
        movie: "Comedy",
        spors: "Runnig,"
    },
    getFullName: function() {                                  //fullname method example
        return `${this.name} ${this.surname}`
    }
   
}

console.log(person)
console.log(person.phone)
console.log(person.skills[3])
console.log(person.hobbies.spors)
console.log(person["zip code"])
console.log(person.getFullName())

person.name = "Ahmet"
console.log(person.name)

person.hobbies.movie = "Geography"
console.log(person.hobbies.movie)

person.skills.push("phyton")
console.log(person.skills)


let newPerson = Object.assign({},person)       //copy object
console.log(newPerson)

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

console.log(person.hasOwnProperty("level"))
console.log(person.hasOwnProperty("country"))
