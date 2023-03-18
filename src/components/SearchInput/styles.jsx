import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
export const Search = styled("div")(({ theme }) => ({
  width: "410px",
  minWidth: "310px",
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
  padding: "10px 17px",
  color: "#ADADAD",
  [theme.breakpoints.between("tablet_650", "tablet_840")]: {
    width: "auto",
  },
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));
export const customSearchIcon = {
  color: "#1F2839",
  fontSize: "18px",
};
