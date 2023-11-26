import MainLayouts from "./layouts/MainLayouts";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "./configs/theme";

import "./styles/reset.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayouts />
    </ThemeProvider>
  );
}

export default App;
