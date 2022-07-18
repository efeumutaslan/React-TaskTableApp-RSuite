
import { AtomInputField } from "../atoms/AtomInputField";

export default function InputForm({ className }) {

    return (
        <div >
            <AtomInputField
                className={className}
                label="Id"
                type="input"
                placeholder="Please Enter Id Number" />

            <AtomInputField
                className={className}
                label="Task Name"
                type="input"
                placeholder="Please Enter Task Name" />

            <AtomInputField
                className={className}
                label="Project Name"
                type="input"
                placeholder="Please Enter Id Number" />

        </div>
    )
}