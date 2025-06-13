//Dates

const mydate= new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
// there are many such methods

console.log(typeof mydate); // output => object

let mycreateddate  = new Date(2021,0 ,15) // months in js start from 0 , so 0 is jan
// let mycreateddate  = new Date("2021-01-12") in this formal of yy-mm-dd 01 is jan
console.log(mycreateddate.toString());

let mytimestamp = Date.now()
// this is used in making applicatons or websites where you need to monitor time , during quizzes or anything
console.log(mytimestamp); // 1
console.log(mycreateddate.getTime());  // this is to compare the time you got in 1 to the time from your created date , its basically for comparison


let newdate = new Date()
console.log(newdate.getDate());
console.log(newdate.getMonth());

