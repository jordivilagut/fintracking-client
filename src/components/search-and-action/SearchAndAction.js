import React from "react";
import {SearchBox} from "../searchbox/SearchBox";
import {Button} from "../button/Button";
import "./SearchAndAction.scss"

export const SearchAndAction = ({searchPlaceholder, searchBoxHandler, buttonAction, buttonText}) => (
    <div className="searchAction">
        <SearchBox
            placeholder={searchPlaceholder}
            onChangeHandler={searchBoxHandler}/>
        <Button
            action={buttonAction}
            mainText={buttonText}
            color="#006494"
            textColor="#FFFFFF"/>
    </div>
)
