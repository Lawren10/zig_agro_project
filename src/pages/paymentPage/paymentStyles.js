import { styled } from "@mui/material/styles";

import { Paper, Avatar, Box } from "@mui/material";

export const AccountTopContainer = styled(Paper)`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  padding: 1.5rem 1rem 0.5rem 1rem;
  background: linear-gradient(
    90deg,
    hsla(186, 66%, 40%, 1) 0%,
    hsla(188, 78%, 69%, 1) 100%
  );
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
