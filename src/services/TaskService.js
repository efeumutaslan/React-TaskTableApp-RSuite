import { tasks } from "../fake-data/tasks";

export default class TaskService {

    async createTask(taskObject) {

        if (Object.values(taskObject).every(x => x)) {
            tasks.push(taskObject);
            return taskObject;
        }
        throw new Error("Invalid Properties");
    }


    async updateTask(taskObject, updatedValue) {
        if (Object.values(taskObject).every(x => x)) {

            tasks.forEach(task => {

                if (task.id === updatedValue.id) {
                    task.projectName = updatedValue.projectName;
                    task.taskName = updatedValue.taskName;
                    tasks.status = updatedValue.status
                }
            })

        }
    }

    async deleteTask(tasksArray) {
        if (tasksArray && tasksArray.length > 0) {

            let ids;
            let indexOfDelete;

            tasksArray.forEach(taskId => {
                ids = tasks.map(task => task.id);
                indexOfDelete = ids.indexOf(taskId);
                tasks.splice(indexOfDelete, 1)
            })

        }
        else {
            alert("There is not selected tasks to delete")
        }
    }


}