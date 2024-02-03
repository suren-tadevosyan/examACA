import { useState } from "react";
import Button from "../../utils/button";
import { Box, Modal } from "@mui/material";
import "../mainPage/main.css";
import Form from "../form/form";
import CurrentUser from "../currentUsers/currentUsers";
import { useSelector } from "react-redux";

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { allUsers } = useSelector((state) => state.user);
  const [onUpdate, setUpdate] = useState(false);
  console.log(allUsers);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleUpdate = () => {
    setUpdate((prev) => !prev);
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
          <Form handleClose={handleClose} handleUpdate={handleUpdate} />
        </Box>
      </Modal>

      <CurrentUser onUpdate={onUpdate} />

      <div className="users">
        Bellow are our users <br />
        {allUsers.map((user, id) => {
          return <div key={id}>{user.name}</div>;
        })}
      </div>
    </div>
  );
};

export default MainPage;
