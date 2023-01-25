//regular expressions

let pattern = "rose"
let flag = "gim"
let regEx = new RegExp(pattern,flag)

let word = /Seckin/gim                         //g global , i intellicase , m multilane
let comment = "my name is seckin bulgur . i living in istanbul."

if (word.test(comment) == true) {   
   console.log("seckin is find.")
}

let str = "i LOVE javascript an i love css"
console.log("index",str.search(/love/i))
console.log(str.match(/love/i))
console.log(str.match(/love/gi))


let txt = "i% am% seck%in bulgur% and i lo%ve css%"
console.log(txt)
console.log(txt.replace(/%/gi,""))

let str2 = "my name is Seckin Bulgur 24. i living in istanbul. I birth in 1997.my phone 5467355117"
console.log(str2.match(/[0-9]/g)) // or
console.log(str2.match(/\d+/g))                          // only numbers
console.log(str2.match(/\b\d{2}\b/g))                    //only 2 char numbers
console.log(str2.match(/\b\d{4}\b/g))                     //only 4 char numbers
console.log(str2.match(/\b\d{4,12}\b/g))                  //only 4 char  and 12 char numbers
console.log(str2.match(/\D/g))                           //only string
console.log("4 char",str2.match(/\b[a-z]{6}\b/gi))        // a-z only 4 char words


let name = "seckin"
console.log(
    /[i|a]n$/.test(name)                    // end with in or an.
)
console.log(
    /a?n$/.test(name)                      //a optinonal but n is requisite.
)
  
let pattern2 = /[f].*/gi
let text = "Apple and banana are so beatiful fruits."
console.log(text.match(pattern2))

let pattern3 = /^this/gi           // start with this?
let str3 ="This value of triangele values."
console.log(str3.match(pattern3))