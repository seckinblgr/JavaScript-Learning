const names = new Set()

names.add("Seçkin","Bulgur",24)
names.add("Bulgur")
names.add(24)
names.add(20)
names.add(20)
names.add(20)
names.delete(24)
console.log(names)
console.log(names.size)
console.log(names.has(20))
console.log(names.has(50))

names.clear()
console.log(names)

const languages = [
    "English",
    "French",
    "Turkish",
    "French",
    "Spanish",
    "Korean",
    "Turkish"
]
const langSet = new Set(languages)
console.log(languages)
console.log(langSet)

counts = []

for (const l of langSet) {
    const filtered = languages.filter((lng) => lng === l)
    console.log(filtered)
    counts.push({ 
        lang:l,
        count: filtered.length
    })
}
console.log(counts)

let a = [1,2,5,4,3]
let b = [1,6,8,3,84,4]
let c = [...a,...b]


console.log("Before set :",c)

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log("After set :",C)

let D = new Set(b)
const intersection = a.filter(num => D.has(num))
let F = new Set(intersection)
console.log(F)

let difference = a.filter(num => !B.has(num))
let Dif = new Set(difference)
console.log(Dif)


//Map

const map = new Map()
map.set(24,"Seçkin",)
map.set(true ,"bool",)
map.set(false,"boll",)
map.set("5","null",)


console.log(map)
console.log(map.get(24))
console.log(map.get(5))
console.log(map.get("5"))
console.log(map.keys())
console.log(map.values())

for (const k of map.keys()) {
    console.log(k) 
}

for (const v of map.values()) {
    console.log(v)
}


const user = {
    name:"Seçkin",
    surname:"Bulgur"
}

const users = new Map(Object.entries(user))     // create map to normal object
console.log(users)
console.log(users.get("name"))