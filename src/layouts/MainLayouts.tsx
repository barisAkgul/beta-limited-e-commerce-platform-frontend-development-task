import { Box, Stack } from "@mui/material";
import sizeConfigs from "~/configs/sizeConfigs";
import colorConfigs from "~/configs/colorConfigs";

type Props = {};

const MainLayouts = (props: Props) => {
  return (
    <Box sx={{ backgroundColor: colorConfigs.mainBg }}>
      Header
      <Stack
        sx={{
          flexDirection: "row",
          minHeight: `calc(100vh - ${sizeConfigs.header.height})`,
        }}
      >
        <Box
          p={3}
          sx={{
            height: "auto",
            width: `${sizeConfigs.sidebar.width}`,
            mb: { sx: 2, md: 0 },
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          SideBar
        </Box>

        <Box
          p={3}
          sx={{
            overflowY: "auto",

            height: "auto",
            flex: { sx: 1, md: 2 },
          }}
        >
          MainSection
        </Box>
      </Stack>
    </Box>
  );
};

export default MainLayouts;
