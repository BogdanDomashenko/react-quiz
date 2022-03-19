import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { Container, Box, Button } from "@material-ui/core";

import { JoinByCodeModal } from "../Modals";

function Navbar() {
  const navigate = useNavigate();

  const [joinByCodeModalOpen, setJoinByCodeModalOpen] = React.useState(false);

  const joinByCode = (code) => {
    navigate("/quizz/" + code, { replace: true });
  };

  return (
    <Box
      sx={{
        bgcolor: "primary.light",
        padding: "10px 0px",
      }}
    >
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Link to="/">
              <Button>Home</Button>
            </Link>
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setJoinByCodeModalOpen(true)}
            >
              Join by code
            </Button>
          </div>
        </Box>
        <JoinByCodeModal
          isOpen={joinByCodeModalOpen}
          setOpen={setJoinByCodeModalOpen}
          successfull={joinByCode}
        />
      </Container>
    </Box>
  );
}

export default Navbar;
