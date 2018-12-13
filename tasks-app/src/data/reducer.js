const createTask = ({ task, id }) => {
    return {
        id: id,
        task: task,
        completed:false,
    };
};


const setTasks = (state, {tasks}) => {
    return {
    	...state,
    	tasks: tasks,
    };
};

const addTask = (state, action) => {
   let newTask = createTask(action);
   let dummy = {
        ...state,
		tasks: state.tasks.concat(newTask),
    };
    return {
        ...state,
		tasks: state.tasks.concat(newTask),
    };

 };

  const removeTask = (state,action) =>{
    let removed = state.tasks.findIndex(task => task.id === action.id);
    let tasks_dummy = state.tasks.slice(0,removed).concat(state.tasks.slice(removed + 1));
    return {
        ...state,
		tasks: tasks_dummy,
    };  
 }


const taskComplete = (state, action) => {

 let tasksCopy = state.tasks.map(task=>{
 	if(task.id === action.id)task.completed = true;
 	return task;
 })
 console.log(tasksCopy);
    return {
        ...state,
        tasks: tasksCopy,
    };

 };
const reducer = (state, action) =>{
    switch(action.type){
    	case "setTasks":return setTasks(state, action);
    	case "addTask":return addTask(state, action);
    	case "removeTask":return removeTask(state, action);
    	case "taskComplete":return taskComplete(state, action);
        default: return state;
    }
}




export default reducer;