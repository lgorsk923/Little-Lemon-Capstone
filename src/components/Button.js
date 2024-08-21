import React from "react";

export function Button({ onClick, testId, type, textVariant }) {
    return (
        <button onClick={onClick} data-testid={testId} type={type} className="btn btn-warning">{textVariant}</button>

    )
}