import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../../Actions";

function EditTask({ edit_task, index }) {
    console.log("edit", edit_task);
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(edit_task.task);
    const handleClose = () => {
        setShow(false);
    };
    const handleChange = (edit) => {
        setEdit(edit);
    };
    const handleShow = () => {
        setShow(true);
    };
    const dispatch = useDispatch();
    const handleClick = () => {
        // dispatching the toggle task action
        dispatch(editTask({ edit: edit, id: edit_task.id }));
        handleClose();
    };

    return (
        <>
            <Button variant="outline-dark" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        type="text"
                        placeholder="Edit your task here..."
                        onChange={(e) => handleChange(e.target.value)}
                        value={edit}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClick}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditTask;
