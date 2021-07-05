console.table("First stage: when no operation is performed.");
// Task List Initial
var taskList = [
    {
        task: "go home",
        done: false
    },
    {
        task: "Buy  sunmica",
        done: false
    }
];
console.table(taskList);
// to add a task to the list        C

console.log("after create operation for: football, true");

const addTask = (task, done) => {
    taskList.push({task: task,done: done})
}

addTask("play Football", false);
addTask("Go to gym!!", true);

displayData();
console.table(taskList);
// Read Data                        R

console.log("Read operation");
console.table(taskList);

function displayData () {
    taskList.forEach(item => {
        console.log(`${taskList.indexOf(item) + 1} ===> ${item.task} ===> ${item.done}`);
    })
    console.table(taskList);
}

// update Data                      U
console.log("After update is peformed for go home");
const UpdateData = (oldTask, newTask) => {
    const index = taskList.indexOf(oldTask);
    taskList[index] = newTask;
}

UpdateData(taskList[0], {task: "come home", done: true});

displayData();
console.table(taskList);
// Delete Data                      D
console.log("After Delete operation");
const deleteData = (data) => {
    const index = taskList.indexOf(data);
    taskList.splice(index, 1);
}

deleteData(taskList[2]);
displayData();
console.table(taskList);


displayData();
