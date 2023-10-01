let toDoList = [];
  
document.querySelector('.js-add-button').addEventListener('click', () => {
  addToDo();
  renderList();
})




function renderList() {
  let toDoListHtml = '';
  toDoList.forEach((toDo, i) => {
    
    const {name, date} = toDo;
    const html = 
    `<div> ${name} </div> 
    <div>${date} </div>
    <button class="buttons delete-button js-delete-button">Delete</button>
    `;
    toDoListHtml+=html;

    document.querySelector('.js-list').innerHTML=toDoListHtml;

    
  });
  document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      deleteToDo(index);
    })
  })
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