import React from "react";
import styled from "styled-components";

import { Container, Box, Button } from "@material-ui/core";

import { JoinByCodeModal } from "../Modals";

function Navbar() {
  const [joinByCodeModalOpen, setJoinByCodeModalOpen] = React.useState(false);

  const joinByCode = () => alert(1);

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
            <Button>Home</Button>
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
