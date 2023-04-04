import React from "react";
import {
  Modal,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  TextField,
  Typography,
} from "@mui/material";

const modalContentBOx = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
};

const CreateAccountModal = ({ open, setAccountModalClose }) => {
  return (
    <>
      <Modal open={open} onClose={setAccountModalClose}>
        <Card sx={modalContentBOx}>
          <CardHeader
            title={
              <Typography
                variant="overline"
                color={"white"}
                fontSize={"1.05rem"}
              >
                Create Account
              </Typography>
            }
            subheader={
              <Typography variant="body2" color={"white"}>
                kindly provide account details below
              </Typography>
            }
            sx={{ backgroundColor: "black" }}
          />

          <CardContent>
            <TextField
              variant="outlined"
              label="Account Name"
              sx={{ width: "100%", margin: "0.5rem 0" }}
              size="small"
            />
            <TextField
              variant="outlined"
              label="Account Number"
              sx={{ width: "100%", margin: "0.5rem 0" }}
              size="small"
              type="number"
            />
            <TextField
              variant="outlined"
              label="Bank Name"
              sx={{ width: "100%", margin: "0.5rem 0" }}
              size="small"
            />
          </CardContent>
          <CardActions>
            <Button variant="contained">Create</Button>
          </CardActions>
        </Card>
      </Modal>
    </>
  );
};

export default CreateAccountModal;
