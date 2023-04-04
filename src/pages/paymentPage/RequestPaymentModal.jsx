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

const modalContentBox = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
};

const RequestPaymentModal = ({ open, setPaymentModalClose }) => {
  return (
    <>
      <Modal open={open} onClose={setPaymentModalClose}>
        <Card sx={modalContentBox}>
          <CardHeader
            title={
              <Typography
                variant="overline"
                color={"white"}
                fontSize={"1.05rem"}
              >
                Request Payment
              </Typography>
            }
            subheader={
              <Typography variant="body2" color={"white"}>
                kindly provide request details below
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
              label="Amount"
              sx={{ width: "100%", margin: "0.5rem 0" }}
              size="small"
              type="number"
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

export default RequestPaymentModal;
