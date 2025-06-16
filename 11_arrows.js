const user ={
    username:"nicole",
    price:299,

   welcomemessage: function() {

    console.log(`${this.username} , welcome to the website`)

   }
}
 //user.welcomemessage() // used to run the above console log

 //user.username="andrew"
 //user.welcomemessage()  // andrew will be printed instead of nicole

//console.log(this) // output ={}


//function one (){
 //   console.log(this)
//}

//one()// calling our function

const one=() => {
    const myname ="nicole"
   //console.log(this.myname) // if you do this in function one above output will be undefined therefore arrow function
}


//const add=(num1,num2) => {
//   return  num1+num2}
//console.log(add(4,5))


// IMPLICIT RETURN

const add=(num1,num2) =>  num1+num2

//console.log(add(4,5))

const addtwo =(num1,num2) =>(num1+num2) // this is mostly used in react
//console.log(addtwo(2,2))



// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

((name) => {
  console.log(`database connected ${name}`);
})('nicole');


//IIFE is used to avoid the pollution caused by variables of the global scope
//()() => two paranthesis are used , first for function and second one for execution

