import { createTheme } from "@material-ui/core/styles";

const Theme = createTheme({
  palette: {
    primary: {
      light: "#f08910",
      main: "#ffffff",
    },
    secondary: {
      light: "#f1f1f1",
      main: "#f28d16",
    },
  },

  border: {
    border: "none",
  },
});

export default Theme;
