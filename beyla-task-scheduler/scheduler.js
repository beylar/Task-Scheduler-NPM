let tasks = [];

const addTasks = (title, description, dueDate) => {
    let newtask = {
        title,
        description,
        dueDate
    
    }
    tasks.push(newtask);
};

const displayTasks = () => {
    tasks.sort(function (a, b) {
        let dateA = a.dueDate;
        let dateB = b.dueDate;
        return dateA - dateB;

    });
    return tasks;
}

const updateTasks = (title, description, dueDate) => {
    const index = tasks.findIndex(obj => {
        return obj.description === description;
    });
    tasks[index].title = title;
    tasks[index].dueDate = dueDate;

    return tasks;
};


const removeTasks = (description) => {
    for (let index = 0; index < tasks.length; index++) {
        if (tasks[index].description === description) {
            tasks.splice(index, 1);

        }
    }


};


module.exports = { addTasks, updateTasks, removeTasks, displayTasks };
