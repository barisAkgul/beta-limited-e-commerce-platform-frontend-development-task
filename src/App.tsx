import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

//Files
import { router } from "./router";
import { theme } from "./configs/theme";

//Styles
import "./styles/reset.css";
import useSessionStore from "./stores/session-store";

function App() {
  const { sessionId, checkSessionID } = useSessionStore();

  useEffect(() => {
    checkSessionID();
  }, []);

  if (!sessionId) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
