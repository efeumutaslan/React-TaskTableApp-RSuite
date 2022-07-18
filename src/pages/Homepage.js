
import React, { useState } from "react";
import CreateTaskForm from "../components/organism/CreateTaskForm";
import UpdateTaskForm from "../components/organism/UpdateTaskForm";
import AtomButton from "../components/atoms/AtomButton";
import AtomTable from "../components/atoms/AtomTable";
import TaskService from "../services/TaskService";
import { ButtonToolbar } from "rsuite";

export default function MainPage() {

    const [isShown, setIsShown] = useState(false);
    const [isCreate, setIsCreate] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [isDeleteVisible, setIsDeleteVisible] = useState(false);
    const [isUpdateVisible, setIsUpdateVisible] = useState(false);
    const [state, setState] = useState({
        selected: []
    })

    const taskService = new TaskService();

    //Controller of delete button visible or not
    const showEditButtonGroup = () => {
        setIsDeleteVisible(true)
        setIsUpdateVisible(true)
    }

    const hideEditButtonGroup = () => {
        setIsDeleteVisible(false)
        setIsUpdateVisible(false)
    }



    //Controller of update button available or not
    const togglePopupUpdate = () => {
        setIsUpdate(update => !update);
    }

    //Controller of delete function available or not
    const deleteTaskFromTable = () => {
        if (state?.selected?.length > 0) {
            taskService.deleteTask(state.selected);

            handleOnSelect([], false)
            handleOnSelectAll(false, [])
        }
        else {
            alert("Error: No selected task!");
        }
    }

    //Controller of update function available or not
    const updateTable = (row) => {

        if (state.selected.length === 1) {
            togglePopupUpdate();

        }
        else {
            alert("Error: Multiple tasks are selected, please choose only on at a time.");
        }
    }

    const handleOnSelect = (row, isSelect) => {
        if (isSelect) {
            showEditButtonGroup()
            setState(() => ({
                selected: [...state.selected, row.id]
            }));
        } else {
            hideEditButtonGroup()
            setState(() => ({

                selected: state.selected.filter(x => x !== row.id)
            }));
        }
    }

    const handleOnSelectAll = (isSelect, rows) => {
        const ids = rows.map(r => r.id);
        if (isSelect) {
            showEditButtonGroup()
            setState(() => ({
                selected: ids

            }))
        } else {
            hideEditButtonGroup()
            setState(() => ({
                selected: []
            }));
        }
    }
    const selectRow = {
        mode: "checkbox",
        clickToSelect: true,
        selected: state.selected,
        style: { backgroundColor: '#bdbdbd' },
        onSelect: handleOnSelect,
        onSelectAll: handleOnSelectAll


    }
    return (
        <div >
            {
                <header >

                    <ButtonToolbar>

                        <AtomButton
                            color="violet"
                            className="btn"
                            text="Show Tasks"
                            onClick={() => setIsShown(cur => !cur)} />

                        <AtomButton
                            color="violet"
                            className="btn"
                            text="Create Task"
                            onClick={() => setIsCreate(!isCreate)} />


                        {isUpdateVisible ? (
                            <AtomButton
                                color="orange"
                                className="btn"
                                text="Update Tasks"
                                onClick={updateTable} />
                        ) : null

                        }

                        {isDeleteVisible ? (
                            <AtomButton
                                color="red"
                                className="btn"
                                text="Delete Tasks"
                                onClick={deleteTaskFromTable} />
                        ) : null

                        }

                    </ButtonToolbar>



                    {isUpdate && (
                        <UpdateTaskForm
                            dataId={state.selected[0]}
                            handleClose={togglePopupUpdate} />
                    )
                    }

                    <br />

                    {isShown && (
                        <AtomTable
                            selectRow={selectRow} />
                    )}

                    {isCreate && (
                        <CreateTaskForm
                            handleClose={() => setIsCreate(!isCreate)} />

                    )}

                </header>

            }
        </div>
    );
}
