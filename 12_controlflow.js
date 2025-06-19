//if

if (2!=3){

 //   console.log("yes")

}

const temperature = 42
if(temperature>50){
  //  console.log("temperature is more than 50")
}
// console.log("temperature is below 50")

// < , > , <= , >= , == ,!= ,===, !==

const score = 200

if(score>100){
    const power ="fly"
   // console.log(`user power is: ${power}`);
}

//console.log(`user power is: ${power}`);// this wont be executed because its outside the scope


const balance = 1100
if (balance < 500) {
     console.log("less than 500");
 } else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
 } else {
   //  console.log("less than 1200");

 }

 const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


//***********************SWITCH ***********/////////////////////////////////


const month = 3 

switch (month) {
  case 1:
    console.log("jan");
    break;
case 2:
    console.log("feb");
    break;
case 3:
    console.log("march");
    break;
case 4:
    console.log("april");
    break;

  default:
    break;
}


//**************TRUTHY & TERINARY OPERATOR*********************// */

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")