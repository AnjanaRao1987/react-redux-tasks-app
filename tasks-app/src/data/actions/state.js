

export const setTasks = tasks => {
console.log(tasks);
    return {
        type: "setTasks",
        tasks: tasks,
    };
};
