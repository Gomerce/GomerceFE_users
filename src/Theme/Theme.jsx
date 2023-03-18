import { createTheme } from "@mui/material/styles";

const borders = "#CED4DA";
const greyLight = "#F4F5EF";
const deepDarkBlue = "#1F2839";
const goldenBrown = "#B69D74";
const white = "#FFFFFF";
const black = "#000000";
const yellow = "#FFC107";
const red = "#DC3545";
const green = "#198754";
const grey = "#6C757D";
const theme = createTheme({
  breakpoints: {
    values: {
      mobile_0: 0, //
      mobile_240: 240,
      mobile_320: 320,
      mobile_360: 360,
      mobile_375: 375,
      mobile_384: 384,
      mobile_393: 393,
      mobile_400: 400,
      mobile_450: 450,
      mobile_550: 550,
      tablet_600: 600, //
      tablet_650: 650,
      tablet_688: 688,
      tablet_769: 768,
      tablet_800: 800,
      tablet_834: 834,
      tablet_840: 840,
      laptop_1024: 1024, //
      laptop_1152: 1152,
      laptop_1280: 1280,
      desktop_1440: 1440, //
    },
  },
  styleOverrides: {
    MuiOutlinedInput: {
      root: {
        "& $notchedOutline": {
          borderColor: greyLight,
        },
        "&$focused $notchedOutline": {
          borderColor: greyLight,
        },
        color: black,
      },
    },
  },
  palette: {
    common: {
      black: black,
      white: white,
    },
    primary: {
      main: deepDarkBlue,
    },
    secondary: {
      main: goldenBrown,
    },
    tertiary: {
      main: greyLight,
    },
    grey: {
      main: grey,
    },
    borders: {
      main: borders,
    },
    green: {
      main: green,
    },
    red: {
      main: red,
    },
    yellow: {
      main: yellow,
    },
    black: {
      main: "#000000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          ":hover, :focus": {
            border: "none",
          },
        },
        contained: {
          backgroundColor: deepDarkBlue,
          color: white,
        },
        outlined: {
          backgroundColor: greyLight,
          color: black,
          border: `1px solid ${greyLight}`,
          ":hover, :focus": {
            border: `1px solid ${greyLight}`,
          },
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        colorPrimary: {
          color: "#8E8E8E",
        },
      },
    },
    MuiTextField: {
      InputLabelProps: {
        shrink: true,
      },
      styleOverrides: {
        root: {
          textTransform: "uppercase",
          color: black,
          border: `1px solid ${borders}`,
          borderRadius: "4px",
          width: "100%",
          "& .MuiOutlinedInput-input": {
            // backgroundColor: greyLight,
          },
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&:hover .MuiInputLabel-root": {
            color: black,
          },
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: black,
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: black,
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: greyLight,
          borderRadius: 4,
          color: black,
          margin: "0 1%",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: black,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: white,
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          margin: "1em 0",
        },
        actions: {
          width: "100px",
          display: "flex",
          flexDirection: "row",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          // color: "white",
        },
      },
    },
  },
});

export default theme;
