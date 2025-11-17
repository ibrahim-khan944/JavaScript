// let student = {
//   name : 'khan',
//   marks : 90 ,
//   printmarks : function () {
//     console.log('ma=rks = ',student.name);
//     console.log('marks = ',this.name);
//   }
// }
// student.printmarks();

// console.log(student.toString);

// let arr = [1,2,3];
// console.log(typeof arr);
// arr.push(4);
// console.log(arr);

// let pro = {
//   tax(){
//     return "tax is 10%" // simple method
//   }
// }

// let obj1 = {
//   salary : 1000,
// }
// let obj2 = {
//   salary : 1000,
// }
// let obj3 = {
//   salary : 20000,
//   tax(){
//     return "tax is 20%"
//   }
// }
// obj1.__proto__ =  pro ;
// obj2.__proto__ =  pro ;
// obj3.__proto__ =  pro ;

// console.log(obj3);

// console.log(obj1.tax());
// console.log(obj2.tax());
// console.log(obj3.tax());


//  JS classes
// class studentc { 
//   start(){
//     console.log('start');
//   }
//   stop(){
//     console.log('stop');
//   }
//     setbrand(brand){
//   this.brandname = brand
// }
//   setstudent(student){
//     this.studentname = student ;
//   }
// }

// let motor = new studentc();
// console.log(motor.start());

// let st1 = new studentc();
// st1.setstudent = 'hamza'
// console.log(st1);

// let st2 = new studentc();
// st2.setstudent('uzair')
// console.log(st2);

// let st3 = new studentc();
// st3.setstudent("mashal");
// console.log(st3);

// class car{
// stop(){
//   console.log('stop');
// }
// constructor(bro,mileage){
//   this.brandname = bro ;
//   this.mileage = mileage ;
//   console.log('constructor automatically invoked');
// }
// }

// let honda = new car('honda',500);
// console.log(honda);
// let civic = new car();
// civic.brandname = 'civic';
// civic.mileage = 200 ;
// console.log(civic);

let a = 2;
let b = 4;
console.log(a+b);
console.log(a+b);
try {
  console.log(a*c);
} catch (e) {
  console.log(e);
}
console.log(a+b);
console.log(a+b);
console.log(a+b);
