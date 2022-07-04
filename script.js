const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const error = document.querySelector('.err')
const errorP = document.querySelector('.errp')
const filterOption = document.querySelector('.filter-todo')
const deleteAll = document.querySelector('.deleteAll')


todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
deleteAll.addEventListener('click', deleteALL)

function addTodo(event){

  //prevent form from submitting
  event.preventDefault()


//error message
if(todoInput.value === '' ){

  error.classList.remove('err')

error.classList.add('container-err')
errorP.classList.toggle('errorp')
error.classList.remove('container-err2')
setTimeout(function(){
  error.classList.add('container-err2')
},100);


setTimeout(function(){
  error.classList.remove('container-err')
  error.classList.add('err')
},1000);





} else{

  // error.classList.add('err')
  // error.classList.remove('container-err')
  //create a div for a todo

  const todoDiv = document.createElement('div')
  todoDiv.classList.add('todo')

  //create Li

  const newTodo = document.createElement('Li')
  newTodo.innerText = todoInput.value
  newTodo.classList.add('todo-item')
  todoDiv.appendChild(newTodo)

  //create check mark

  const completedButton = document.createElement('button')
  completedButton.innerHTML = `<i class="fas fa-check"></i>`
  completedButton.classList.add('completed-btn')
  todoDiv.appendChild(completedButton)

  //create delete button
  const deleteButton = document.createElement('button')
  deleteButton.innerHTML = `<i class="fas fa-trash"></i>`
  deleteButton.classList.add('delete-btn')
  todoDiv.appendChild(deleteButton)
  //append to list
  todoList.appendChild(todoDiv)

  //clear todo input value
  todoInput.value = ""
}
}

function deleteCheck(e){
 const item = e.target
 //delete item
 if(item.classList[0] === 'delete-btn'){
    const todo = item.parentElement
    todo.classList.add('deleted')
    todo.addEventListener('transitionend', function(){
      todo.remove()
    })
  
 }

 //complete task
 if(item.classList[0] === 'completed-btn'){
  const todo = item.parentElement
  console.log(todo)
  todo.classList.toggle('completed')
  
 }
}

function deleteALL(){
  
}





