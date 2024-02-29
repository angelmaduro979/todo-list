const form=document.getElementById('form');
const input=document.getElementById('taskInput');
const button=document.getElementById('button');
const tasksRender=document.getElementById('tasksAdded');
const reset=document.getElementById('resetButton');
let todoList=[];



const addTask=(event)=>{
    event.preventDefault();

    if(input.value!==''){
        todoList.push(input.value);
         renderFunction();
         saveData();
         input.value='';
 
    }
}

const renderFunction=()=>{

    tasksRender.innerHTML='';
    
    todoList.forEach(task => {
        const createLi=document.createElement('li');
        createLi.textContent=task;
        tasksRender.appendChild(createLi) 
        
    })
    
}

const saveData=()=>{
    console.log('Guardando datos en localStorage:', todoList);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    console.log('Datos guardados correctamente en localStorage.');
}

const loadData=()=>{
    let data=localStorage.getItem('todoList')
    if(data){
        console.log('Cargando datos desde localStorage...');
        todoList= JSON.parse(data);
        console.log('Datos cargados correctamente desde localStorage:', todoList);
        renderFunction()
    } else{
        console.log('no se han podido cargar los datos')
        const message='Whoops! There are no tasks for now. Add some and see the magic happen 😊';
        const createMessage=document.createElement('span');
        createMessage.textContent=message;
        tasksRender.appendChild(createMessage)
    }
}

const deleteFunction=()=>{
    if(todoList.length>0){
        todoList=[];
        renderFunction();
        saveData();
    }
}





reset.addEventListener('click',deleteFunction); 
button.addEventListener('click',addTask);
loadData();

