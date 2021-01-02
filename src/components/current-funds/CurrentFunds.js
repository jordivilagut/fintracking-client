import {Button} from "../button/Button";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {AddFundsModal} from "../add-funds-modal/AddFundsModal";

export const CurrentFunds = ({currentFunds, refreshSummary}) => {
    const {t} = useTranslation();
    const [showModal, setShowModal] = useState(false)
    const toggleModal = () => setShowModal(!showModal)

    return <div className="scoreboard light-border">
        <div>
            <h1>{currentFunds != null ? currentFunds : "???"}€</h1>
            <p>{t("current.funds")}</p>
        </div>
        <Button
            action={toggleModal}
            mainText={t("add.current.funds")}/>
        <AddFundsModal
            showModal={showModal}
            toggleModal={toggleModal}
            refreshSummary={refreshSummary}/>
    </div>
}
