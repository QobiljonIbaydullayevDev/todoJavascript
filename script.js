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
    }
    inputBx.value=''
}

