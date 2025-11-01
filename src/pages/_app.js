import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/globals.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#f2b827" },
    background: { default: "#0e0e0e" },
  },
  typography: {
    fontFamily: "IRANSans, sans-serif",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
