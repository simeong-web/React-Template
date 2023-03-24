import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000"
    },
    secondary: {
      main: "#f50057"
    },
  },
  typography: {
    fontFamily: "sans-serif",
    h6: {
      fontSize: 16,
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: 12,
      fontWeight: 500,
    },
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: grey["200"],
        },
      },
    },
  },
});

