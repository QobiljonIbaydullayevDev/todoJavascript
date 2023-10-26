const inputBx = document.getElementById("inputBox")
const todoList = document.querySelector('.newTodo')
const toddbox =document.getElementById("inputBox")
const span = document.querySelector("span")

const addHandler=()=>{
    if(inputBx.value===''){
        alert("you must write anything !!!")
    }

    else{
        console.log(todoList);
        let newTodoList = document.createElement("li")
        newTodoList.innerHTML=inputBx.value
        console.log(inputBx.value);
        todoList.appendChild(newTodoList)
        console.log(newTodoList);
        let span =document.createElement("span")
        span.innerHTML="Remove"
        todoList.appendChild(span)
        console.log(span);
        span.addEventListener("click",()=>{
            todoList.removeChild(newTodoList)
            todoList.removeChild(span)
        })
    }
    inputBx.value=''
}

const focusHandler=()=>{
    inputBx.style.backgroundColor="Azure"
    inputBx.style.outline="None"
}

window.document.body.style.userSelect="None"




