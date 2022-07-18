import React from "react"

//Given parameters creates a selection option, no need to fill every variable


export default function AtomSelection({
    className,
    id,
    name,
    value,
    label,
    options,
    onChange

}) {


    const optArray = options.map(option => {

        return (
            <option
                value={option.value_text}>

                {option.value_text}

            </option>
        )

    })

    return (
        <div
            className={className}
        >
            <label> {label} </label>
            <br />
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}>

                {optArray}

            </select>
        </div>
    )
}