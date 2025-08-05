
// async function DelhiWeither(){
//      setTimeout(()=>{
//       console.log("Delhi Weither is 21 Deg")  
//      })
// }

// async function BangoloruWeither(){
//     setTimeout(()=>{
//         console.log("Bangoloru weither is 30 Degree")
//     })
// }

async function hello(){
    
let DelhiWeither = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve("21 Deg")  
    },1000)
})

let BangoloruWeither = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("30 Degree")
    },6000)
})

console.log("Getting Delhi wether condition")

let delWether = await DelhiWeither
console.log("Delhi wether condition is "+delWether)

console.log("Getting Bangoloru wether condition")
let BangoloruWether = await BangoloruWeither
console.log("Bangoloru wether condition is "+BangoloruWether)

return [delWether,BangoloruWether]
}

console.log(hello())