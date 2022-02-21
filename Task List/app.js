
const form=document.querySelector('#task-form');
const taskInput=document.querySelector('#task');
const filter=document.querySelector('#filter');
const clearBtn=document.querySelector('.clear-tasks');
const taskList=document.querySelector('.collection');
//const cardSection=document.querySelector('.card');

loadEventListeners();
function loadEventListeners(){
  form.addEventListener('submit',addTask);
  taskList.addEventListener('click',deleteTask);
  clearBtn.addEventListener('click',clearTask);
  filter.addEventListener('keyup',filterTask);
  // cardSection.addEventListener('mousemove',changeBackground);
}



(function(e){
  let tasks;
  if(localStorage.getItem('tasks')===null)
  {tasks=[];}
  else{

    tasks=JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks);
  tasks.forEach(function(task){
    const li=document.createElement('li');
    li.className='collection-item';
    //create text node and append to li
   li.appendChild(document.createTextNode(task));
   //create new link element
  
   const link=document.createElement('a');
   link.className='delete-item secondary-content';
   link.innerHTML=`<i class="fa fa-remove" ></i>`;
   
   li.appendChild(link);
   
    taskList.appendChild(li);
    
   
    taskInput.value="";
  
  });}
})();
 

// function changeBackground(e){
//   console.log('yes');
//   document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${e.offsetX-e.offsetY})`;
// }

function addTask(e){
  if(taskInput.value===''){
    alert('Add a task.');
  }
  else
  {
   const li=document.createElement('li');
   li.className='collection-item';
   //create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //create new link element
 
  const link=document.createElement('a');
  link.className='delete-item secondary-content';
  link.innerHTML=`<i class="fa fa-remove" ></i>`;
  
  li.appendChild(link);
  
   taskList.appendChild(li);
   
   storeTaskInLocalStorage(taskInput.value);
   taskInput.value="";
  }

   e.preventDefault();
}


function storeTaskInLocalStorage(task)
{let tasks;
  if(localStorage.getItem('tasks')===null)
    {tasks=[];

    }
    else{
      tasks=JSON.parse(localStorage.getItem('tasks'));}
      tasks.push(task);
      localStorage.setItem('tasks',JSON.stringify(tasks));
    

}


function deleteTask(e){
 //e.target.remove(); 
  if(e.target.parentElement.classList.contains('delete-item'))  
  {if(confirm('Are you sure?'))
    {
    e.target.parentElement.parentElement.remove();
    removeLocalStorage( e.target.parentElement.parentElement);
    }
  }
 e.preventDefault();
}


function removeLocalStorage(taskToBeDeleted)
{let tasks;
  if(localStorage.getItem('tasks')===null)
    {tasks=[];

    }
    else{
      tasks=JSON.parse(localStorage.getItem('tasks'));}
      tasks.forEach(function(task,index){
        if(task===taskToBeDeleted.textContent)
         {tasks.splice(index,1);
           
         }

      });
      localStorage.setItem('tasks',JSON.stringify(tasks));

}


function clearTask(){
  if(confirm('Are you sure to clear the task list ?'))
  {while(taskList.firstChild)
    {removeLocalStorage(taskList.firstChild);
      taskList.removeChild(taskList.firstChild);
      
    }}
}


function filterTask(e){
     const text=e.target.value.toLowerCase();
     console.log(document.querySelectorAll('.collection-item'));
     document.querySelectorAll('.collection-item').forEach(function(task){
       const item=task.firstChild.textContent;
       if(item.toLowerCase().indexOf(text)!=-1)
       {task.style.display='block';
       }
       else
       {task.style.display='none';
       }
       console.log(item);

     });
     e.preventDefault();
}