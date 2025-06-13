//Arrays

const myarr = [0,2,3,4]
const pets = ["dog","cat"]

const myarr2 = new Array(10,20,20,40)
console.log(myarr[0]);

//Array Methods

myarr.push(12)
myarr.push(8)
myarr.pop()
//console.log(myarr);

myarr.unshift(9)
myarr.shift()
//console.log(myarr);

console.log(myarr.includes(4)); // boolean output
console.log(myarr.indexOf(4));

const newarr = myarr.join()
console.log(newarr)
console.log(typeof newarr); // string

// slice , splice
console.log("a " ,myarr)
const arr1 = myarr.slice(0,3)// considers elements only from index 0-2
console.log(arr1)

console.log("b " ,myarr)
const arr2 = myarr.splice(0,3)// considers elements  from index 0-3

console.log(arr2)

//******************** */

const animals = ["dog" , "cat" ,"horse"]
const birds = ["crow","crane","eagle"]

animals.push(birds)
//console.log(animals);
animals.concat(birds)
//console.log(animals);

const allanimals = animals.concat(birds)
//console.log(allanimals);

//****spread operator*****

const all = [...animals,...birds]
//console.log(all);

const nums = [1,2,3,[4,5],6,[7,8,9],10]
const nums2 = nums.flat(Infinity)// instead of infinity you can also put any size
console.log(nums2);

console.log(Array.isArray("nicole"))//false
console.log(Array.from("nicole"))
