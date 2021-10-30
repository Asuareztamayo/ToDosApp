//Variables
const list = [];
let addToDo = document.getElementById('addToDo');
let emptyList = document.getElementById('deleteList');
let task = document.getElementsByClassName('task');
let doneTask = document.getElementById('doneTask');


//EventLsitener
addToDo.addEventListener('keypress',  function (e) {
    if (e.key === 'Enter' && addToDo.value !== "") {
        list.push(addToDo.value)
        addToDo.value = "";
        allToDo();
        console.log(list)
    }
});

emptyList.addEventListener('click', () => {
    eraseList();
})


// functions 
// function changeColor(){;
//     if (task.style.display == "block") {
//         task.style.display = "none"
//     };
//     if(doneTask.style.display == "none") {
//         doneTask.style.display = "block"
//     };
//     if (doneTask.style.display == "block"){
//         doneTask.style.display = "none"
//     };
// }


function allToDo(){
    let table = document.getElementById('toDoList');
    let allTasks = "";
    for (let i = 0; i< list.length; i++) {
        allTasks +='<li class="d-flex justify-content-between task"  id="doneTask" onclick="changeColor()">' + list[i] + '<button type="submit" class="delete-task" onclick ="deleteT('+ i +')">Delete</button>';
    }
    table.innerHTML = allTasks;
}

function eraseList() {
    list.length = 0;
    allToDo();
};

function deleteT(index){
    let position = parseInt(index);
    list.splice(index,1);
    allToDo();
}