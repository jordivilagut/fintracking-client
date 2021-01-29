import {Button} from "../button/Button";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {AddFundsModal} from "../add-funds-modal/AddFundsModal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-regular-svg-icons";

export const CurrentFunds = ({currentFunds, refreshSummary}) => {
    const {t} = useTranslation();
    const [showModal, setShowModal] = useState(false)
    const toggleModal = () => setShowModal(!showModal)
    const registeredFunds = currentFunds != null
    const editIconVisibility = registeredFunds ? "block" : "none"
    const modalTitle = registeredFunds ?  t("edit.current.funds") : t("add.current.funds")

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
                <h1>{currentFunds != null ? currentFunds : "???"}€</h1>
                <p>{t("current.funds")}</p>
            </div>
            <Button
                hidden={currentFunds != null}
                color="#dddddd"
                action={toggleModal}
                mainText={t("add.current.funds")}/>
            <AddFundsModal
                modalTitle={modalTitle}
                initialAmount={registeredFunds ? currentFunds : 0}
                showModal={showModal}
                toggleModal={toggleModal}
                refreshSummary={refreshSummary}/>
        </div>
    </div>
}
