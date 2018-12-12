
const setTasks = (state, action) => {
    return state;
};

const reducer = (state, action) =>{
    switch(action.type){
    	case "setTasks":return setTasks(state, action);
        default: return state;
    }
}



export default reducer;