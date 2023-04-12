import React, { useState } from "react";
import { SectionBody } from "../../styledComponents/globalComponents";
import {
  Stack,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Button,
  ButtonGroup,
  Paper,
} from "@mui/material";
import {
  AccountTopContainer,
  AccountAvatar,
  AccountTopDetail,
  AccountMainDetailContainer,
  // AccountTransactionContainer,
} from "./paymentStyles";
import CreateAccountModal from "./CreateAccountModal";
import RequestPaymentModal from "./RequestPaymentModal";
import { MdAdd, MdPayment } from "react-icons/md";

const Accounts = () => {
  const [accountModal, setAccountModal] = useState(false);
  const [requestModal, setRequestModal] = useState(false);

  let openAccountModal = () => {
    setAccountModal(true);
  };

  let closeAccountModal = () => {
    setAccountModal(false);
  };

  let openRequestModal = () => {
    setRequestModal(true);
  };

  let closeRequestModal = () => {
    setRequestModal(false);
  };
  return (
    <>
      <SectionBody>
        <Typography
          color={"green"}
          variant="overline"
          component={"h2"}
          fontSize={"2rem"}
        >
          Account
        </Typography>
        <Stack>
          <AccountTopContainer elevation={1}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"start"}
              height={"100%"}
              padding={"0rem 2rem"}
            >
              <AccountAvatar>cp</AccountAvatar>
              <AccountTopDetail>
                <Typography variant="h6">Account Balance</Typography>
                <Typography variant="h3"># 000.000</Typography>
              </AccountTopDetail>
            </Stack>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <ButtonGroup variant="contained" size="small" color="info">
                <Button startIcon={<MdAdd />} onClick={openAccountModal}>
                  Create Account
                </Button>
                <Button startIcon={<MdPayment />} onClick={openRequestModal}>
                  Request Payment
                </Button>
              </ButtonGroup>
            </Box>
          </AccountTopContainer>

          <AccountMainDetailContainer elevation={2}>
            <Typography
              variant="subtitle1"
              sx={{ textDecoration: "underline" }}
            >
              Account Details
            </Typography>
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <Typography variant="subtitle2">Account Name:</Typography>
              <Typography
                variant="overline"
                sx={{ textTransform: "lowercase" }}
              >
                Lorem ipsum dolor
              </Typography>
            </Stack>

            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <Typography variant="subtitle2">Account Type:</Typography>
              <Typography
                variant="overline"
                sx={{ textTransform: "lowercase" }}
              >
                Lorem ipsum dolor
              </Typography>
            </Stack>

            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <Typography variant="subtitle2">Bank Name:</Typography>
              <Typography
                variant="overline"
                sx={{ textTransform: "lowercase" }}
              >
                Lorem ipsum dolor
              </Typography>
            </Stack>
          </AccountMainDetailContainer>

          <Box sx={{ marginTop: "2rem" }}>
            <Typography variant="overline" fontSize={"0.9rem"}>
              Transcaction History
            </Typography>
          </Box>
          <TableContainer
            component={Paper}
            sx={{
              borderRadius: ".5rem",
              border: "1px solid #eee",
            }}
          >
            <Table>
              <TableHead
                sx={{
                  backgroundColor: "black",
                }}
              >
                <TableRow>
                  <TableCell sx={{ color: "white" }}>Transaction Id</TableCell>
                  <TableCell sx={{ color: "white" }}>
                    Beneficiary Name
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>
                    Beneficiary Account
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>Amount Payed</TableCell>
                  <TableCell sx={{ color: "white" }}>Date</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell>#00000000</TableCell>
                  <TableCell>jhon doe</TableCell>
                  <TableCell>000 000 0000</TableCell>
                  <TableCell># 000.00</TableCell>
                  <TableCell>00/00/0000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </SectionBody>

      {/* modals for account and payment request are located here */}
      <CreateAccountModal
        open={accountModal}
        setAccountModalClose={closeAccountModal}
      />
      <RequestPaymentModal
        open={requestModal}
        setPaymentModalClose={closeRequestModal}
      />
    </>
  );
};

export default Accounts;
