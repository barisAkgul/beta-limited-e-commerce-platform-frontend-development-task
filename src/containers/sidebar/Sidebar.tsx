import {
  Avatar,
  Drawer,
  List,
  Stack,
  Toolbar,
  Typography,
  Divider,
  Box,
} from "@mui/material";

import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import appRoutes from "~/configs/appRoutes";
import SidebarItem from "~/components/sidebar/SidebarItem";
import SidebarItemCollapse from "~/components/sidebar/SidebarItemCollapse";

const Sidebar = () => {
  return (
    <List
      disablePadding
      sx={{ backgroundColor: "#fff", maxHeight: "85vh", overflowY: "auto" }}
    >
      <Toolbar sx={{ marginBottom: "4px" }}>
        <Stack sx={{ width: "100%" }} direction="row" justifyContent="left">
          <Typography variant="h6">Top Categories</Typography>
        </Stack>
      </Toolbar>
      <Box
        sx={{
          margin: "5px 10px 15px 10px",
          display: "flex",

          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        {/*Red Line*/}
        <Box
          component="span"
          sx={{
            width: "100%",
            lineHeight: 1.5,
            backgroundColor: "rgb(248, 199, 207)",
            height: "3px",
            borderRadius: "2px 0px 0px 2px",
          }}
        ></Box>

        {/* Grey Line */}
        <Box
          component="span"
          sx={{
            width: "100%",
            lineHeight: 1.5,
            height: "2px",
            borderRadius: "0px 2px 2px 0px",
            background: colorConfigs.sidebar.bg,
          }}
        ></Box>
      </Box>
      {appRoutes.map((route, index) =>
        route.sidebarProps ? (
          route.child ? (
            <SidebarItemCollapse item={route} key={index} />
          ) : (
            <SidebarItem item={route} key={index} />
          )
        ) : null
      )}
    </List>
  );
};

export default Sidebar;
