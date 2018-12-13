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

const reducer = (state, action) =>{
    switch(action.type){
    	case "setTasks":return setTasks(state, action);
    	case "addTask":return addTask(state, action);
        default: return state;
    }
}



export default reducer;