import React from "react";

import { Modal, Box, Typography, TextField, Button } from "@material-ui/core";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const buttonsStyle = {
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "20px",
};

function JoinByCode({ isOpen, setOpen, successfull }) {
  const [code, setCode] = React.useState("");

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleClose = () => setOpen(false);

  const handleJoin = () => {
    successfull(code);
    handleClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <TextField
          id="outlined-basic"
          label="Enter code"
          variant="outlined"
          value={code}
          onChange={handleCodeChange}
          fullWidth
        />
        <Box sx={buttonsStyle}>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
          <Button variant="contained" color="secondary" onClick={handleJoin}>
            Join
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default JoinByCode;
