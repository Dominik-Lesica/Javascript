let toDoList = [];
  
let toDoListHtml;

function renderList() {
  
  toDoListHtml='';
  for(let i = 0; i<toDoList.length;i++) {
    const toDo = toDoList[i];
    const {name} = toDo;
    const {date} = toDo;
    
      const html = 
      `<div> ${name} </div> 
      <div>${date} </div>
      <button onclick="
        deleteToDo(${i});
      " class="buttons delete-button">Delete</button>
      `;
    toDoListHtml+=html;
  
  document.querySelector('.js-list').innerHTML=toDoListHtml;
    }
    
}



function addToDo() {
  let name = document.querySelector('.js-name-input').value;
  const date = document.querySelector('.js-date-input').value;
  toDoList.push({name,
  date});
  console.log(toDoList);
  name='';
}

function deleteToDo(i) {
  if(toDoList.length===1){
    toDoList = [];
    toDoListHtml = '';
    document.querySelector('.js-list').innerHTML=toDoListHtml;
  } else {
  toDoList.splice(i, 1);
  renderList();
  }
}