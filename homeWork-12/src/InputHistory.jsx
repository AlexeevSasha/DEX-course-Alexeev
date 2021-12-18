import React from "react";

export function InputHistory({ history, classCatalog = '' }) {
    return (
        <li className={`console__item ${classCatalog}`}>{history}</li>
    );
}
