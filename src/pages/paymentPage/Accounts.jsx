import React from "react";
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
} from "@mui/material";
import {
  AccountTopContainer,
  AccountAvatar,
  AccountTopDetail,
  AccountMainDetailContainer,
  AccountTransactionContainer,
} from "./paymentStyles";

const Accounts = () => {
  return (
    <>
      <SectionBody>
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
              <Typography variant="overline">Lorem ipsum dolor</Typography>
            </Stack>

            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <Typography variant="subtitle2">Account Type:</Typography>
              <Typography variant="overline">Lorem ipsum dolor</Typography>
            </Stack>

            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <Typography variant="subtitle2">Bank Name:</Typography>
              <Typography variant="overline">Lorem ipsum dolor</Typography>
            </Stack>
          </AccountMainDetailContainer>

          <AccountTransactionContainer>
            <TableContainer>
              <Table sx={{ borderRadius: ".5rem", border: "1px solid #eee" }}>
                <TableHead
                  sx={{
                    backgroundColor: "black",
                  }}
                >
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>
                      Transaction Id
                    </TableCell>
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
          </AccountTransactionContainer>
        </Stack>
      </SectionBody>
    </>
  );
};

export default Accounts;
