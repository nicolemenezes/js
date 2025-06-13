const name = "nicole"
const repo = 10

//console.log( name + repo);

console.log(`hello my name is ${name} and my repo count is ${repo}`);
const accname=  new String('nicmen')
console.log(accname[0])
console.log(accname.__proto__);
console.log(accname.length);
console.log(accname.toUpperCase());

console.log(accname.charAt(4));
console.log(accname.indexOf('c'));

const newstring = accname.substring(0, 4)
console.log(newstring); // output=>nicm 

const anotherstring = accname.slice (-5,3)
console.log(anotherstring);

const newstringone = "   hello   "
//console.log(newstringone)  output=>  hello  
//console.log(newstringone.trim()) output=>hello

const url = "https://nic.com/nic%20men"

console.log (url.replace('%20','-'))

console.log(url.includes('nic')) // output - true
console.log(url.includes('hello')) // output - false




