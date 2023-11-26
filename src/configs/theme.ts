import { createTheme } from "@mui/material/styles";
import colorConfigs from "./colorConfigs";

export const theme = createTheme({
  palette: {
    primary: {
      main: colorConfigs.general.primary,
    },
  },
});
