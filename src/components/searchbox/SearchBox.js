import React from "react";

export const SearchBox = ({placeholder, onChangeHandler}) => (
    <input
        type="text"
        placeholder={placeholder}
        onChange={onChangeHandler}/>
);
