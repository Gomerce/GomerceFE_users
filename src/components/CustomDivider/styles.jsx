import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

export const CustomDivider = styled(Divider)(({ theme }) => ({
  width: "100%",
  border: "1px solid #CED4DA",
  flex: "none",
  order: "0",
  alignSelf: "stretch",
  margin: "2% 0",
}));
