import React from "react";

export function Button({ type, textVariant }) {
    return (
        <button type={type} className="btn btn-warning">{textVariant}</button>

    )
}