import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

// Styles
import styles from "./modal.module.css";
import PostContext from "../../context/postContext";

export default function FormDialog({
  save,
  open,
  setOpen,
  titleBox,
  titleButton,
}) {
  const { setInputs } = useContext(PostContext);
  const inputTitle = useRef(null);
  const inputComment = useRef(null);

  let title;
  let comment;
  const handler = async () => {
    title = inputTitle.current.value;
    comment = inputComment.current.value;
    await setInputs({ title, comment });
  };

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.modal}>
      <button
        className={styles.button}
        variant="outlined"
        onClick={handleClickOpen}
      >
        {titleButton}
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{titleBox}</DialogTitle>
        <DialogContent>
          {titleBox === "POST" ? (
            <input
              name="title"
              type="text"
              variant="standard"
              ref={inputTitle}
              onChange={handler}
            />
          ) : null}
          <input
            name="comment"
            type="text"
            fullWidth
            ref={inputComment}
            onChange={handler}
          />
        </DialogContent>
        <DialogActions className={styles.button_container}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={save}>Publicar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
