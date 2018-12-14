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
    return {
        ...state,
		tasks: state.tasks.concat(newTask),
    };

 };

  const removeTask = (state,action) =>{
    return {
        ...state,
		tasks: state.tasks.filter(task=>task.id!==action.id),
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


 const editTask = (state, action) => {
 	let tasksCopy = state.tasks.map(task=>{
 		if(task.id === action.task.id)task.task = action.task.task;
 		return task;
	 })
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
    	case "editTask":return editTask(state, action);
        default: return state;
    }
}




export default reducer;