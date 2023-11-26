import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

//Files
import { router } from "./router";
import { theme } from "./configs/theme";

//Styles
import "./styles/reset.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
