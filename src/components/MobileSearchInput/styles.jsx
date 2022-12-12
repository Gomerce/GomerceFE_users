import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
export const Search = styled("div")(({ theme }) => ({
  width: "94%",
  // minWidth: "300px",
  // maxWidth: "500px",
  borderRadius: "4px",
  border: "1px solid #CED4DA",
  height: "50px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  color: "#ADADAD",
  margin: "2% auto",
  // alignSelf: "stretch",
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#1F2839",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
  },
}));
export const customSearchIcon = {
  color: "#1F2839",
  fontSize: "18px",
};
