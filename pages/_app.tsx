import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/roboto/500.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { cyan } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0C1B33",
    },
    secondary: {
      main: "#B2AA8E",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
