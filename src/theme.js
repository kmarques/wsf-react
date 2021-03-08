import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#7fffd4" },
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 14,
  },
  overrides: {
    MuiButton: {
      contained: {
        borderRadius: 20,
      },
      containedPrimary: {
        borderRadius: 5,
      },
    },
  },
});

export default theme;
