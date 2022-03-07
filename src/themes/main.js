import { createTheme } from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";

let theme = createTheme({
  palette: {
    primary: {
      light: purple[200],
      main: purple[400],
      dark: purple[700],
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;
