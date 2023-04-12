import styled from "@emotion/styled";

import { TableContainer, Table, TableHead, TableRow, Box } from "@mui/material";

export const ProductTableWrapper = styled(Box)`
  background-color: #fafaff;
  padding: 1.5rem;
  border-radius: 0.5rem;
`;

export const ProductTableContainer = styled(TableContainer)`
  border-radius: 0.5rem;
  background-color: transparent !important;
`;

export const ProductTable = styled(Table)``;

export const ProductTableHeader = styled(TableHead)`
  background: black;
  color: white;
`;

export const ProductTableRow = styled(TableRow)``;
