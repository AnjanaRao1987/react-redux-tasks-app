import axios from "../../axios.js";
import history from "../../history.js";
import { setTasks } from "./state";
import { setTask } from "./state";
import { removeTask } from "./state";
import { taskComplete } from "./state";
import { updateTask } from "./state";


export const getTasks = () => dispatch => {
    axios.get("/tasks").then(({ data }) => {
        const tasks = data.data;
        dispatch(setTasks(tasks));

    });
};

export const getTask = id => dispatch => {
    axios.get(`/tasks/${id}`).then(({ data }) => {
        const task = data.data;
        dispatch(setTask(task));
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

export const putTask= (id, data) => dispatch => {
    axios.put(`/tasks/${id}`, data).then(({ data }) => {
        const task = data.data;
        dispatch(updateTask(task));
        history.push("/");
    });
};



