import { ListItemButton, ListItemIcon, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import colorConfigs from "../../configs/colorConfigs";

type Props = {
  item: any;
};

const SidebarItem = ({ item }: Props) => {
  return item.sidebarProps && item.path ? (
    <ListItemButton
      component={Link}
      to={item.path}
      sx={{
        "&: hover": {
          backgroundColor: colorConfigs.sidebar.hoverBg,
        },
        // backgroundColor:
        //   appState === item.state ? colorConfigs.sidebar.activeBg : "unset",
        paddingX: "10px",
      }}
    >
      <ListItemIcon
        sx={{
          fontSize: "22px",
          minWidth: "36px",
        }}
      >
        {item.sidebarProps.icon && item.sidebarProps.icon}
      </ListItemIcon>
      <Typography
        sx={{ color: "rgb(80,89,107)", fontWeight: 400, fontSize: "15px" }}
      >
        {item.sidebarProps.displayText}
      </Typography>
    </ListItemButton>
  ) : null;
};

export default SidebarItem;
