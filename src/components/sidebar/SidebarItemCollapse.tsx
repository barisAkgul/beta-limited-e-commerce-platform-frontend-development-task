import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";

//Conponents
import SidebarItem from "./SidebarItem";

//Files
import colorConfigs from "../../configs/colorConfigs";
import { RouteType } from "~/types/routeTypes";

//İcons
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

type Props = {
  item: RouteType;
};

const SidebarItemCollapse = ({ item }: Props) => {
  const [open, setOpen] = useState(false);

  return item.sidebarProps ? (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{
          "&: hover": {
            backgroundColor: colorConfigs.sidebar.hoverBg,
          },
          paddingX: "10px",
          fontSize: "16px",
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
        <ListItemText
          disableTypography
          primary={
            <Typography sx={{ color: "rgb(80,89,107)", fontSize: "15px" }}>
              {item.sidebarProps.displayText}
            </Typography>
          }
        />
        {open ? <ExpandMoreOutlinedIcon /> : <NavigateNextOutlinedIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
        <List>
          {item.child?.map((route, index) =>
            route.sidebarProps ? (
              route.child ? (
                <SidebarItemCollapse item={route} key={index} />
              ) : (
                <SidebarItem item={route} key={index} />
              )
            ) : null
          )}
        </List>
      </Collapse>
    </>
  ) : null;
};

export default SidebarItemCollapse;
