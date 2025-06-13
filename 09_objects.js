//objects - singleton
// object literals
const mysymbol =("key1")

const jsuser ={
    name:"nicole",
    age: 18,
    [mysymbol]: "mykey1", 
    email:"nicolemene@yahoo.com",
    isloggedin : false,
    lastlogindays:["monday", "wednesday"]

}
//console.log(jsuser.email); 
//console.log(jsuser["email"]);
console.log(typeof jsuser[mysymbol])
jsuser.email ="nicm12@google.com"

//Object.freeze(jsuser)

jsuser.email ="nicmenezes@google.com"// this wont be changed in your object because you have freezed your object in line18
//console.log(jsuser)

jsuser.greeting = function()
{
    console.log("hello js  user")
}
//console.log(jsuser.greeting)// undefined
console.log(jsuser.greeting())



//*************PART 2************************ */


// const instauser = new object()

    const instauser ={}
instauser.name = "ria"
instauser.isloggedin= true
instauser.userid = "123xyz"


//console.log(instauser)

const regularuser ={
    userid:"hi34",
    fullname:{
userfullname: {
    firstname:"nicole",
    lastname:"menezes"
}
    }
}
console.log(regularuser.fullname)

const obj1 ={1:"a" ,2:"b"}
const obj2 ={3:"a" ,4:"b"}
//const obj3 =Object.assign({},obj1 ,obj2)//{} - target ; obj1,obj2- source

const obj3 ={...obj1,...obj2}
console.log(obj3);