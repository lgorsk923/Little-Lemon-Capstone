import React from "react";

export function Button({ onClick, testId, type, textVariant, disabled, ariaLabel }) {
    return (
        <button onClick={onClick} data-testid={testId} type={type} className="btn btn-warning" aria-labelledby={ariaLabel} disabled={disabled}>{textVariant}</button>

    )
}