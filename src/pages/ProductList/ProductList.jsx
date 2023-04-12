import React from "react";
import { SectionBody } from "../../styledComponents/globalComponents";
import {
  Typography,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Paper,
  TablePagination,
} from "@mui/material";
import {
  ProductTableContainer,
  ProductTable,
  ProductTableHeader,
  ProductTableRow,
  ProductTableWrapper,
} from "./productListStyle";

const ProductList = () => {
  return (
    <SectionBody>
      <Typography
        color={"green"}
        variant="overline"
        component={"h2"}
        fontSize={"2rem"}
      >
        Product List
      </Typography>

      <ProductTableWrapper>
        <ProductTableContainer component={Paper}>
          <ProductTable>
            <ProductTableHeader>
              <TableRow>
                <TableCell sx={{ color: "white" }}>Picture</TableCell>
                <TableCell sx={{ color: "white" }}>Product Name</TableCell>
                <TableCell sx={{ color: "white" }}>Price</TableCell>
                <TableCell sx={{ color: "white" }}>Quantity</TableCell>
                <TableCell sx={{ color: "white" }}>Date</TableCell>
              </TableRow>
            </ProductTableHeader>
            <TableBody>
              <ProductTableRow hover={true}>
                <TableCell>
                  <Avatar>P</Avatar>
                </TableCell>
                <TableCell>lOREM IPSUM</TableCell>
                <TableCell> 000.00</TableCell>
                <TableCell>00</TableCell>
                <TableCell>00/00/0000</TableCell>
              </ProductTableRow>

              <ProductTableRow hover={true}>
                <TableCell>
                  <Avatar>P</Avatar>
                </TableCell>
                <TableCell>lOREM IPSUM</TableCell>
                <TableCell> 000.00</TableCell>
                <TableCell>00</TableCell>
                <TableCell>00/00/0000</TableCell>
              </ProductTableRow>
            </TableBody>
          </ProductTable>
        </ProductTableContainer>
        <TablePagination rowsPerPageOptions={[5, 10, 25]} component="div" />
      </ProductTableWrapper>
    </SectionBody>
  );
};

export default ProductList;
