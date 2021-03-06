

export const setTasks = tasks => {
console.log(tasks);
    return {
        type: "setTasks",
        tasks: tasks,
    };
};

export const setTask = ({ task , id }) => {
    return {
        type: "addTask",
        task: task,
        id:id,
    };
};

export const removeTask = ( id ) => {
    return {
        type: "removeTask",
        id: id,
    };
};

export const taskComplete = ( id ) => {
    return {
        type: "taskComplete",
        id: id,
    };
};

export const updateTask = task => {
    return {
        type: "editTask",
        task: task,
    };
}