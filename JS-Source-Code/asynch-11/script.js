// console.log("one");
// console.log("two");

// function ok(){
//   console.log("hello asynchronous");
// }
// setTimeout(ok ,2000);

// console.log('three');
// console.log('four');

//       synch  :

// function sum(a,b){
//  console.log(a+b);
// }
// function fn2(a, b, sumcallbacks) {
//   sumcallbacks(a,b)
// }
// fn2(3,4,sum)

// fn2(1, 2, (a, b) => {
//   console.log(a + b);

// })

// function sum(a,b,cf){
//  let r =  a+b;
//   cf(r)
// }
// sum( 2, 3, function(ok) {
// console.log("the sum is" ,ok);
// });

//       Asynch   :

// let he = ()=>{
//   console.log("hello");

// }
// setTimeout(he,2000);

// function calldata(data,nextdata){
// setTimeout(()=>{
//     console.log("Data id = ",data);
//     if(nextdata){
//       nextdata();
//     }
// },2000)
// };

// calldata(1,()=>{
//   calldata(2,()=>{
//     calldata(3)
//   })
// });

//   promises  ;

// let promise = new Promise((resolve, reject) => {
//   console.log("hello");
//   reject("some error")
// })
// console.log(promise);

// function data(d){
//  return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//   console.log("the data is = ", d); 
//    reject("success")
//   },5000)
//  })

// }
// let ok = data(2);
// console.log(ok);

// let getpromise = () => {
// return new Promise((resolve, reject) => {
//   console.log("hello");
//   resolve("success")
// //   reject("error")
// })
// }
// let promise = getpromise();
// promise.then((res)=>{
//   console.log("resolve fulfiled",res);
// })

// promise.catch((err)=>{
//   console.log("reject fulfilled",err);
// })

// function asyn1(){
//   return new Promise ((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("fetched");
//     resolve("success")
//   },5000) 
// })
// }

// function asyn2(){
//   return new Promise ((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("data2 fetched");
//     resolve("success2")
//   },3000) 
// })
// }
// console.log("data1 is fetching ...");

// let a1 = asyn1()
// a1.then((res)=>{
//   console.log(res);
//   console.log("data2 is fetching ... ");
//    asyn2().then((res)=>{
//     console.log(res);
//   })
// })


// function calldata(data){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     console.log("Data id = ",data);
//     resolve("resolve")
// },2000)
//   })
// };

// calldata(1).then(()=>{
//   return calldata(2)
// })
// .then((res)=>{
// return calldata(3)
// })
// .then((res)=>{
// return calldata(4)
// })
// .then((res)=>{
//   console.log("result =",res);
// })

      //async-await   ;  
       
 
//      function api(){
//         return new Promise ((resolve,reject)=>{
//      setTimeout(()=>{
//           console.log("weather");
//           resolve("200")
//      },2000)     
//         })
//       }

//    async function getdata(){
//    await api();
//    await api();
//    }
//    getdata() ;

  function setdata(data){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("Data id = ",data);
    resolve("resolve")
},2000)
  })
};

async function calldata() {
      await setdata(1);
      await setdata(2);
      await setdata(3);
      await setdata(4);
      await setdata(5);
}
calldata()

    // imediately invoked function  (.. IIFE ..)
// (
//       async function calldata() {
//       await setdata(1);
//       await setdata(2);
//       await setdata(3);
//       await setdata(4);
//       await setdata(5);
// }
// )();