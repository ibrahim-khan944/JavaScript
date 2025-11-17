let todolist = [
  {item : 'buy milk',
     duedate : '5/1/2024'
    },
  {
item : 'go to college',
duedate : '5/1/2024',
  }
];

displayitem();
function add() {
  let inputelement = document.querySelector('input');
    let dateelement = document.querySelector('#date');
  let todoitem = inputelement.value; 
  let tododate = dateelement.value;
todolist.push({item : todoitem ,duedate : tododate
});
inputelement.value ='';
dateelement.value = '';
displayitem();
}

function displayitem() {
  let containerelement = document.querySelector('.ce');

let newhtml = '';
  for (let i = 0; i < todolist.length; i++) {
    // let item = todolist[i].item;
    // let duedate = todolist[i].duedate
    let {item , duedate} = todolist[i];
       newhtml += `
    <div>
    <span>${item}</span>
    <span>${duedate}</span>
    <button onclick ="todolist.splice(${i},1); displayitem()">delete</button>
    </div>
    `;
    containerelement.innerHTML = newhtml;
  };
};