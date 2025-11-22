// class greet {
//   say() {
//     console.log('hello');
//   }
// }

// class child extends greet { };
// let obj4 = new child();
// console.log(obj4.say());

// class person {
//    constructor(){
//     this.species = "homosapians"
//   }
//   sleep() {
//     console.log('sleep');
//   }
//   wake() {
//     console.log('wake up');
//   }
// }

// class doctor extends person {
//   work() {
//     console.log('treatment');
//   }
// }

// let a =new doctor()
// console.log(a);

// class engineer extends doctor{
//   eng(){
//     console.log('build somthing')
//   }
// }

// let obj = new engineer();
// console.log(obj);
// obj.sleep()
// obj.wake()
// obj.work()
// obj.eng()

// class person {
//    constructor(name){
//     this.species = "homosapians"
//     this.name = name;
//   }
//   sleep() {
//     console.log('sleep');
//   }
// }
// class eng extends person{
//     constructor(name){
//       super(name)
//     }
// }

// let obj = new eng("khan");
// console.log(obj);

  //  ** practise questions 1 ** \\


// let data = "secret data";
//   class user{
//     constructor(name,email){
//       this.name = name
//       this.email = email
//     }
//     viewdata(){
//       console.log('data = ', data);
//     }
//   }
//   let obj1 = new user("khan","testemail&.com");
//   let obj2 = new user("hamza","hamza&gmail.com");
//   let teacher = new user("physics","physics&gmail.com");
//   console.log(obj1);
//   console.log(obj2);
//   console.log(teacher.viewdata());
  
    //  ** practise questions 2 ** \\

    // class admin extends user{
    //   constructor(name,email){
    //     super(name,email)
    //   }
    //  editdta(){
    //   data = "some new value"
    //  }
    // }
    // let ob = new admin("khan",'@test.com');
    // console.log(ob);
    
    