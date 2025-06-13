const score= 400
// console.log(score)

const balance = new Number(100.0145)
console.log(balance);
console.log(balance.toString())
console.log(balance.toString().length)// after converting num to string we can use all the properties we use for string
console.log(balance.toFixed(2)) // will print two nos after decimal

const otherno= 123.983
console.log(otherno.toPrecision(3)) // priority to nos before decimal

const val = 100000000
console.log(val.toLocaleString('en-IN'));// en-IN is to get value according to indian standards.

//***********MATH********** */

//console.log(Math.abs(-4)) // only neg no gets pos
//console.log(Math.round(6.899)) // round figure
//console.log(Math.ceil(2.01))
//console.log(Math.floor(2.01))
//console.log(Math.max(2,3,4))
//console.log(Math.min(2,3,4))

//console.log(Math.random) // returns any val between 0-1
console.log(Math.random()* 10 +1);
console.log(Math.floor(Math.random()* 10 +1));
const max = 12
const min = 8
console.log(Math.floor(Math.random() * (max-min+1))+min)// formula

