import axios from "../../axios.js";
import history from "../../history.js";
// import the setTitles action
import { setTasks } from "./state";
import { setTask } from "./state";
import { removeTask } from "./state";
import { taskComplete } from "./state";


export const getTasks = () => dispatch => {
    axios.get("/tasks").then(({ data }) => {
        // for now, just log the response data
        const tasks = data.data;

        // dispatch the setTitles action, passing along the articles List
        dispatch(setTasks(tasks));

    });
};

export const addTask = ({ task }) => dispatch =>{
	axios.post("/tasks",{
		"task":task,
	}).then(({data})=>{
		console.log("added");
		const tasks = data.data;
		dispatch(setTask(tasks));
		history.push("/");
	});
}

export const deleteTask = (id) => dispatch =>{

	    axios.delete("/tasks/"+id).then(({ data }) => {
        dispatch(removeTask(id));

    });
}

export const patchTask = (id) => dispatch =>{
	    axios.patch("/tasks/"+id+"/completed").then(({ data }) => {
        dispatch(taskComplete(id));
    });
}




