import axios from "../../axios.js";
import history from "../../history.js";
import { setTasks } from "./state";
import { setTask } from "./state";
import { removeTask } from "./state";
import { taskComplete } from "./state";
import { updateTask } from "./state";



//API action to get all tasks from database
export const getTasks = () => dispatch => {
    axios.get("/tasks").then(({ data }) => {
        const tasks = data.data;
        dispatch(setTasks(tasks));
    }).catch(error => {
    alert("Fetching Tasks failed", error.response);
});;
};

//API action to get a perticular task
export const getTask = id => dispatch => {
    axios.get(`/tasks/${id}`).then(({ data }) => {
        const task = data.data;
        dispatch(setTask(task));
    }).catch(error => {
    alert("Getting Task Failed", error.response);
});
};


//API action to Add a perticular task
export const addTask = ({ task }) => dispatch =>{
    axios.post("/tasks",{
        "task":task,
    }).then(({data})=>{
        console.log("added");
        const tasks = data.data;
        dispatch(setTask(tasks));
        history.push("/");
    }).catch(error => {
    alert("Adding Task Failed", error.response);
});
}


//API action to delete a perticular task
export const deleteTask = (id) => dispatch =>{
	    axios.delete("/tasks/"+id).then(({ data }) => {
        dispatch(removeTask(id));

    }).catch(error => {
    alert("Removing Task Failed", error.response);
});;
}


//API to patch to mark a task complet
export const patchTask = (id) => dispatch =>{
	    axios.patch("/tasks/"+id+"/completed").then(({ data }) => {
        dispatch(taskComplete(id));
    }).catch(error => {
    alert("Editing Task Failed", error.response);
});;
}

export const putTask= (id, data) => dispatch => {
    axios.put(`/tasks/${id}`, data).then(({ data }) => {
        const task = data.data;
        dispatch(updateTask(task));
        history.push("/");
    }).catch(error => {
    alert("Editing task status Failed", error.response);
});;
};



