# TASK SCHEDULER

You can schedule your tasks by using addTask function
```bash
   const scheduler = require("beyla-task-scheduler");

   let firstTask=   scheduler.addTasks("House Hunting","Visiting appartments and rentals", new Date("July 30 2020 01:04:00 PM"));
    let secondTask=  scheduler.addTasks("Laundry","Washing tops and jeans" , new Date("June 25 2022 02:00:00 PM"));
    let thirdTask=  scheduler.addTasks("Reading","A positive mind", new Date("May 15 2021 05:00:00 AM"));

   console.log(scheduler.displayTasks());
```
 
## Installation
```bash
  npm install beyla-task-scheduler

```
## Description
This program enables you to list your tasks, add more tasks, remove completed tasks, update your task list and display all your tasks.
Task is shown by its title, description, dueDate and status of completion.
The task can be in different domains it is not limited to a number of tasks.


## Features
- add Tasks
- remove Tasks
- update Tasks
- display Tasks

## License
MIT

