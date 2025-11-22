let url = "https://jsonplaceholder.typicode.com/users"
let ai = document.querySelector("#id");
let btn = document.querySelector("#btn")

let getdata = async ()=>{
  console.log("getting data ...");
  
  let response = await fetch(url)
  console.log(response);
 let data = await response.json()
 console.log(data);
  ai.innerText = data[5].name ;
};
// getdata();
btn.addEventListener("click",getdata)

