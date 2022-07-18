import React from "react";
import PropTypes from "prop-types";
import { Button } from "rsuite";

//Given parameters creates a button, no need to fill every variable

export default function AtomButton({
    styles,
    color,
    className,
    text,
    isDisabled,
    onClick,
    loading,
    appearance,
    block
}) {
    return (
        <Button
            className={className}
            onClick={onClick}
            color={color}
            style={styles}
            disabled={isDisabled}
            appearance={appearance}
            loading={loading}
            block={block}
        >
            {text}
        </Button>
    )
}

AtomButton.defaultProps = {
    loading: false,
    isDisabled: false,
    appearance: "primary",
    block: false
}

AtomButton.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    styles: PropTypes.object,
    isDisabled: PropTypes.bool,
    loading: PropTypes.bool,
    appearance: PropTypes.string,
    block: PropTypes.bool
}