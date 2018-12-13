

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
