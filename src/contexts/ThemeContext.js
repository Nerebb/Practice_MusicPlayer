import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { common } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      white: common.white,
      black: common.black,
    },
  },
  shape: {
    borderRadius: "20px",
  },
  padding: {
    default: 2,
  },
});

function AppThemeProvider({ children }) {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
