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

