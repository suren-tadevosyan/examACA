import { useState } from "react";
import Button from "../../utils/button";
import { Box, Modal } from "@mui/material";
import "../mainPage/main.css";
import Form from "../form/form";
import CurrentUsers from "../currentUsers/currentUsers";

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="app">
      <Button
        type={"button"}
        className={"modal-toggler"}
        value={"Open modal"}
        onClick={handleOpen}
      />
      <Modal open={isOpen} onClose={handleClose}>
        <Box className="box">
          <Form handleClose={handleClose} />
        </Box>
      </Modal>

      <CurrentUsers />
    </div>
  );
};

export default MainPage;
