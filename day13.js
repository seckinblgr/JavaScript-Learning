//console methods

console.log("i love javascript")

console.log("%cStop!","font-size:60px; color:red; text-shadow: 0 0 10px white;")    // css 

console.warn("This is a warning!")
console.error("This is a error!")
const names =["Seçkin","Ahmet","Ayse","Selen"]
console.table(names)

console.time("array time")
new Array(10e5).fill().map((value,index) => index)
console.timeEnd("array time")

let a = 10;
console.assert(a < 5 ,"a > 5 ;")

let forLoop = () => {return console.count("For")}
forLoop();
forLoop();
forLoop();
forLoop();
forLoop();


 
