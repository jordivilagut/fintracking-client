import React from "react";
import "./ListEmptyState.scss"

export const ListEmptyState = ({hidden, message}) => (
    <div className={hidden ? "hidden" : "emptyState light-border"}>
        <p>{message}</p>
    </div>
);
