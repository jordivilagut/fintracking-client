import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const TextCarousel = ({text, actionLeft, actionRight}) => (
    <h2>
        <span className="clickable">
            <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={actionLeft}/>
        </span>
        <span className="monthName">{text}</span>
        <span className="clickable">
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        onClick={actionRight}/>
        </span>
    </h2>
)
