import { Stack, Box } from "@mui/material";

//Files
import sizeConfigs from "~/configs/sizeConfigs";
import colorConfigs from "~/configs/colorConfigs";

//Components
import Logo from "~/components/header/Logo";
import SearchBar from "~/components/header/SearchBar";
import IconSection from "~/components/header/IconSection";

const Header = () => {
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
      <Logo />
      <Box
        sx={{ width: "50%", display: { xs: "none", sm: "none", md: "block" } }}
      >
        <SearchBar />
      </Box>

      <IconSection />
    </Stack>
  );
};

export default Header;
