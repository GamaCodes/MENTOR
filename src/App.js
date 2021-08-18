import "./App.css";
import Home from "./pages/Home";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#00cfc8",
      main: "#17ADA9",
      dark: "#136e6b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#e22a2e",
      main: "#ad171a",
      dark: "#730f11",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
