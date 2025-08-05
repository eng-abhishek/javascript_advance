var a  = "abhi"
var b = 10

// Here it is working 
var c
c = 100
console.log(c)

let d
d =200
// let d = 1000    it gives error bcz you can not assign d variable again
console.log(d)

{
    // here it take as a another variable and you should not change it
    let a = "abhi soni"

    // here you can not use it gives SyntaxError: Identifier 'a' has already been declared
    // let a = 10

    // But in var b = 20 you can do it  That why we can not use it because it overwrite anywhere

    console.log(a)
}