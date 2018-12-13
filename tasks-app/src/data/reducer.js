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
    console.log("addTask");
    console.log(dummy);
    return {
        ...state,
		tasks: state.tasks.concat(newTask),
    };

 };

  const removeTask = (state,action) =>{


    let removed = state.tasks.findIndex(task => task.id === action.id);
    console.log("index"+removed);
    console.log(state.tasks.slice(0,removed-1));
    console.log(state.tasks.slice(removed + 1));
    let tasks_dummy = state.tasks.slice(0,removed-1).concat(state.tasks.slice(removed + 1));
    console.log(tasks_dummy);
    return {
        ...state,
		tasks: tasks_dummy,
    };
   
 }

const reducer = (state, action) =>{
    switch(action.type){
    	case "setTasks":return setTasks(state, action);
    	case "addTask":return addTask(state, action);
    	case "removeTask":return removeTask(state, action);
        default: return state;
    }
}




export default reducer;