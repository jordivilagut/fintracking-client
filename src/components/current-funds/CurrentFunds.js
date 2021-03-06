import {Button} from "../button/Button";
import React from "react";
import {useTranslation} from "react-i18next";
import {AddFundsModal} from "../add-funds-modal/AddFundsModal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-regular-svg-icons";

export const CurrentFunds = ({funds, setFunds, submitFunds, showModal, toggleModal, refreshSummary}) => {
    const {t} = useTranslation();
    const editIconVisibility = funds !== 0 ? "block" : "none"
    const modalTitle = funds !== 0 ?  t("edit.current.funds") : t("add.current.funds")

    return <div className="scoreboard light-border light-gray">
        <div className="topElements">
            <p style={{display: editIconVisibility}}>
                <FontAwesomeIcon
                    onClick={toggleModal}
                    icon={faEdit}/>
            </p>
        </div>
        <div className="bottomElements">
            <div>
                <h1>{funds != null ? funds : "???"}€</h1>
                <p>{t("current.funds")}</p>
            </div>
            <Button
                hidden={funds != null}
                color="#dddddd"
                action={toggleModal}
                mainText={t("add.current.funds")}/>
            <AddFundsModal
                modalTitle={modalTitle}
                handleSubmit={submitFunds}
                funds={funds}
                setFunds={setFunds}
                showModal={showModal}
                toggleModal={toggleModal}
                refreshSummary={refreshSummary}/>
        </div>
    </div>
}
