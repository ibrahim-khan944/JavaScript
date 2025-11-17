let user = prompt("enter number");
if (user % 5 === 0) {
  console.log(user ,"it is multiple of 5");
}
else{
  console.log(user , "not multiple of 5 ");
  
}


let scor = prompt("enter marks (1-100)") ;
let grade;
if (scor >= 90 && scor <= 100) {
  grade = "A Grade"
}
else if (scor >= 80 && scor <= 89) {
  grade = "B Grade"
}
else if (scor >= 60 && scor <= 79) {
  grade = "C Grade"
}
 else if (scor >= 35 && scor <= 59) {
  grade = "D Grade"
}
else if(scor > 0 && scor < 35){
  grade = "F Grade and concieved is fail"
}
alert("you achieve " + grade);
