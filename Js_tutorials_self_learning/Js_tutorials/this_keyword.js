const bioData = {
    name:"Abhi",
    email:"abhi@gmail.com",
    contact_no:"7071310320",
    notes(){
        console.log("My name is "+this.name+" and contact details like Mobile: "+this.contact_no+" Email id "+this.email+" Thanks...")
    }
}

bioData['Address']='BBK LKO'
bioData['Name']= 'Abhi Soni'

bioData.notes()
console.log(bioData.Address)

console.log(this)

let abc = "abhishek_soni"
console.log(`My Name is ${abc}`)
