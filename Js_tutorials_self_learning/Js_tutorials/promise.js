let p1 = new Promise((resolve,reject)=>{

    console.log("Promise is pending");

      setTimeout(()=>{
        console.log('I am a promise and i am fullfiled');
        resolve(true)
      },5000)
})

let p2 = new Promise((resolve,reject)=>{

    console.log("Promise is pending");

      setTimeout(()=>{
        console.log('I am a promise and i am rejected');
        reject(new Error("I am a error"))
      },5000)
})

//console.log(p1,p2)

// Get Success Data In Js
p1.then((value)=>{
      console.log(value)
})

// Get error in Js
p2.catch( (error)=> {
  console.log("I am an error")  
})

p2.then((value) => {
    console.log(value)
}, (error) => {
    console.log('I am facing some error here')
})