// error handling

try {
    //code throw an error
} catch (error) {
    //code to be executed if a error
}finally{
    // succesful or error code to executed.
}


try {
    let name = "Seçkin"
    console.log(name,surname)
} catch (error) {
    console.log(error)
}finally{
    console.log("I will be executed")
}


//ref error

let name = "seçkin"
let surname = "bulgur"
let fullName = name +""+lastname       // lastname is not defined


//syntax error
 
//console.log( 5x5)         // x is not multiply, use * 
console.log(5*5)        

//type error

let num = 20;
console.log(num.toLowerCase())       



