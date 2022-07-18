import PropTypes from "prop-types"
import React from "react"

//Given parameters creates a input field, no need to fill every variable


export function AtomInputField({
    className,
    label,
    type,
    name,
    value,
    onChange,
    placeHolder,
    required }) {
    return (
        <>
            <label> {label} </label>
            <br />
            <input className={className}
                type={type}
                placeholder={placeHolder}
                name={name}
                value={value}
                onChange={onChange}
                required={required} />

            <br />
        </>
    )
}



AtomInputField.propTypes = {
    type: PropTypes.string,
    placeHolder: PropTypes.string
}