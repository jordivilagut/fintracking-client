import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";
import {useTranslation} from "react-i18next";


export const ConfirmationModal = ({show, closeModal, action}) => {

    const {t} = useTranslation();

    return <Modal show={show} centered onHide={closeModal}>
        <Modal.Header closeButton>
            <Modal.Title>{t("delete.item")}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className="cashierRow">
                <p>{t("delete.item.confirmation")}</p>
            </div>
        </Modal.Body>

        <Modal.Footer>
            <Button
                variant="secondary"
                onClick={closeModal}>
                {t("general.close")}
            </Button>
            <Button
                id="submitButton"
                variant="danger"
                onClick={action}>
                {t("general.delete")}
            </Button>
        </Modal.Footer>
    </Modal>
}
