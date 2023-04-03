import { styled } from "@mui/material/styles";

import { Paper, Avatar, Box } from "@mui/material";

export const AccountTopContainer = styled(Paper)`
  width: 100%;
  height: 10rem;
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  background: linear-gradient(
    90deg,
    hsla(113, 96%, 81%, 1) 0%,
    hsla(188, 90%, 51%, 1) 100%
  ); ;
`;

export const AccountAvatar = styled(Avatar)`
  width: 7rem;
  height: 7rem;
  background: linear-gradient(
    90deg,
    hsla(186, 33%, 94%, 1) 0%,
    hsla(216, 41%, 79%, 1) 100%
  );
`;

export const AccountTopDetail = styled(Box)`
  text-align: center;
  color: white;
  width: 100%;
`;

export const AccountMainDetailContainer = styled(Paper)`
  width: 30%;
  padding: 1rem;
  margin-top: 1.5rem;
`;

export const AccountTransactionContainer = styled(Paper)`
  width: 100%;
  height: 50vh;
  padding: 1rem;
  margin-top: 1.5rem;
`;
