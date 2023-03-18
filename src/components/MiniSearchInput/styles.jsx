import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
export const Search = styled("div")(({ theme }) => ({
  borderRadius: "4px",
  border: "1px solid #CED4DA",
  height: "50px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  [theme.breakpoints.up("tablet_840")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "10px 17px",
  color: "#ADADAD",
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
  width: "252px",
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("laptop_1024")]: {
      width: "20ch",
    },
  },
}));
export const customSearchIcon = {
  color: "#1F2839",
  fontSize: "18px",
};
