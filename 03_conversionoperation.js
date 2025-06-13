const { hello } = require("hello")

let score= "33nm"
 console.log(typeof score)
 console.log(typeof(score))

 let value = Number(score)
 console.log(typeof value) // for 33nm it will print the type as number because you have conterted the type to number
 console.log(value) // for 33nm when u print the value it will print as NaN because even if you have converted your string value to number the input is not completely in number form.

 // "33"=>33
 // "33nm"=> NaN
 //null=>0
 //undefined=>NaN

 let isLoggedIn = 0
 let state = Boolean(isLoggedIn)
 console.log(state)

 //1=>true ; 0=>false
 //""=> false
 //"abc"(any value)=>true

 let somenum= 33
 let stringnum= String(somenum)
 //console.log(stringnum)
 //console.log(typeof stringnum)


 //**********OPERATIONS */
 let val=3
 let negval =-val
 //console.log(negval)

 let str1= "hello"
 let str2= "nicole"
 let str3 = str1+str2
 //console.log(str1+str2)

// console.log("1"+ 2)
 //console.log(1+ "2")
// console.log(1+ 2+"1")
 //console.log("1"+ 2+2)

 console.log(+true)
 console.log(+"")

 let gamescore= 50
 ++gamescore
 console.log(gamescore)
 //++gamescore=>prefix ; gamescore++=>postfix
 

 




