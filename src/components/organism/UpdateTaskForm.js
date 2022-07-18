
import React, { useState } from "react";
import { AtomInputField } from "../atoms/AtomInputField";
import AtomSelection from "../atoms/AtomSelection";
import AtomButton from "../atoms/AtomButton";
import { tasks } from "../../fake-data/tasks";
import { TASK_STATUS } from "../constant/taskStatuses";
import TaskService from "../../services/TaskService";

export default function UpdateTaskForm({ dataId, handleClose }) {
    const prevObject = tasks.find(task => task.id === dataId);

    const [id, setId] = useState(prevObject.id);
    const [taskName, setTaskName] = useState(prevObject.taskName);
    const [projectName, setProjectName] = useState(prevObject.projectName);
    const [status, setStatus] = useState(prevObject.status);

    const taskService = new TaskService();


    const handleChangeId = (event) => {
        setId(() => event.target.value)
    }

    const handleChangeTaskName = (event) => {
        setTaskName(() => event.target.value)
    }

    const handleChangeProjectName = (event) => {
        setProjectName(() => event.target.value)
    }

    const handleChangeStatus = (event) => {
        setStatus(() => event.target.value)
    }


    const updateTaskFunc = async (event) => {

        event.preventDefault();

        await taskService.updateTask(prevObject, {
            id,
            taskName,
            projectName,
            status
        })

        handleClose()

    }


    return (
        <div className="popup-box">
            <div className="box">
                <form>

                    <h5>Update Task</h5>
                    <AtomButton
                        className="btn-close"
                        onClick={handleClose} />
                    <AtomInputField
                        className="input-form"
                        label="Id"
                        type="input"
                        name="id"
                        value={id}
                        onChange={handleChangeId}
                        required={true}
                        defaultValue={prevObject.id} />

                    <AtomInputField
                        className="input-form"
                        label="Task Name"
                        type="input"
                        name="taskName"
                        value={taskName}
                        onChange={handleChangeTaskName}
                        required={true} />

                    <AtomInputField
                        className="input-form"
                        label="Project Name"
                        type="input"
                        name="projectName"
                        value={projectName}
                        onChange={handleChangeProjectName}
                        required={true} />
                    <AtomSelection
                        className="selection-form"
                        id="selection_task"
                        label="Status:"
                        name="status"
                        value={status}
                        onChange={handleChangeStatus}
                        options={TASK_STATUS} />

                    <AtomButton
                        className="btn-create-update"
                        text="Update"
                        onClick={updateTaskFunc} />

                </form>
            </div>
        </div>
    )
}






