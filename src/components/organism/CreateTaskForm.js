
import React, { useState } from "react"
import AtomSelection from "../atoms/AtomSelection";
import { TASK_STATUS } from "../constant/taskStatuses";
import AtomButton from "../atoms/AtomButton";
import { AtomInputField } from "../atoms/AtomInputField";
import TaskService from "../../services/TaskService";

export default function CreateTaskForm({ handleClose }) {

    const [id, setId] = useState("");
    const [taskName, setTaskName] = useState("");
    const [projectName, setProjectName] = useState("");
    const [status, setStatus] = useState("Not Started");



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

    const createTaskFunc = async (event) => {

        event.preventDefault();

        const obj = {
            id,
            taskName,
            projectName,
            status
        }

        try {
            await taskService.createTask(obj);
            handleClose();
        }
        catch (error) {
            alert("Please enter values to field CORRECTLY!");
        }


    }


    return (
        <div className="popup-box">
            <div className="box">
                <form>

                    <h5>Create Task</h5>
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
                        placeholder="Please Enter Id Number"
                        required={true}
                    />

                    <AtomInputField
                        className="input-form"
                        label="Task Name"
                        type="input"
                        name="taskName"
                        value={taskName}
                        onChange={handleChangeTaskName}
                        placeholder="Please Enter Task Name"
                        required={true} />

                    <AtomInputField
                        className="input-form"
                        label="Project Name"
                        type="input"
                        name="projectName"
                        value={projectName}
                        onChange={handleChangeProjectName}
                        placeholder="Please Enter Id Number"
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
                        text="Create"
                        onClick={createTaskFunc} />
                </form>
            </div>
        </div>
    )
}



