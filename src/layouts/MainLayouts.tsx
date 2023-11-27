import { Box, Stack } from "@mui/material";

//files
import sizeConfigs from "~/configs/sizeConfigs";
import colorConfigs from "~/configs/colorConfigs";

//components
import Header from "~/containers/header/Header";
import MainSection from "~/components/main-section";
import Sidebar from "~/containers/sidebar/Sidebar";
import SearchBar from "~/components/header/SearchBar";

const MainLayouts = () => {
  return (
    <Box sx={{ backgroundColor: colorConfigs.mainBg }}>
      <Header />
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
          <Sidebar />
        </Box>
        <Box
          p={3}
          sx={{
            overflowY: "auto",
            height: "auto",
            flex: { sx: 1, md: 2 },
          }}
        >
          <Box
            sx={{
              marginX: "auto",
              width: "96%",
              display: { xs: "block", sm: "block", md: "none" },
            }}
          >
            <SearchBar />
          </Box>
          <MainSection />
        </Box>
      </Stack>
    </Box>
  );
};

export default MainLayouts;
