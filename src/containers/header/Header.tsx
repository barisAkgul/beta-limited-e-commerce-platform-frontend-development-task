import { Stack } from "@mui/material";

import sizeConfigs from "~/configs/sizeConfigs";
import colorConfigs from "~/configs/colorConfigs";

type Props = {};

const Header = (props: Props) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: colorConfigs.header.bg,
        top: 0,
        justifyContent: "space-between",
        padding: "0 48px 0 24px",
        height: sizeConfigs.header.height,
        zIndex: "9999",
      }}
    >
      Header
    </Stack>
  );
};

export default Header;
