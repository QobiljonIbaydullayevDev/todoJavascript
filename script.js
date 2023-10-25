const inputBx = document.getElementById("inputBox")
const todoList = document.querySelector('.newTodo')

const addHandler=()=>{
    if(inputBx.value===''){
        alert("you must write anything")
    }

    else{
        let newTodoList = document.createElement("li")
        newTodoList.innerHTML=inputBx.value
        todoList.appendChild(newTodoList)
        let span =document.createElement("span")
        span.innerHTML="Remove"
        todoList.appendChild(span)
        span.addEventListener("click",()=>{
            todoList.removeChild(newTodoList)
            todoList.removeChild(span)
        })
        saveDate()
    }
    inputBx.value=''
}

function saveDate(){
    localStorage.setItem("data", todoList.innerHTML)
}
function showTask(){
    todoList.innerHTML=localStorage.getItem("data")
}
showTask()
