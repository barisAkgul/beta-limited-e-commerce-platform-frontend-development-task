import { RouteType } from "~/types/routeTypes";

//Pages
import HomePage from "~/pages/home-page/HomePage";

//Icons
import BreakfastIcon from "~/assets/icons/Breakfast";
import BottleIcon from "~/assets/icons/Bottle";
import FrozenIcon from "~/assets/icons/Frozen";
import CarrotIcon from "~/assets/icons/Carrot";
import AppleIcon from "~/assets/icons/Apple";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Dariry & Eggs",
      icon: <BottleIcon />,
    },
  },
  {
    path: "/",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Breakfast",
      icon: <BreakfastIcon />,
    },
  },
  {
    path: "/",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Frozen",
      icon: <FrozenIcon />,
    },
  },
  {
    path: "/",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Vegetables",
      icon: <CarrotIcon />,
    },
    child: [
      {
        path: "/",
        element: <HomePage />,
        state: "home",
        sidebarProps: {
          displayText: "Carrot",
        },
      },
      {
        path: "/",
        element: <HomePage />,
        state: "home",
        sidebarProps: {
          displayText: "Potato",
        },
      },
    ],
  },
  {
    path: "/",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Fruits & Vegetables",
      icon: <AppleIcon />,
    },
    child: [
      {
        index: true,
        element: <HomePage />,
        state: "home",
      },
      {
        path: "/",
        element: <HomePage />,
        state: "home",
        sidebarProps: {
          displayText: "Apple",
        },
      },
    ],
  },
  {
    path: "/",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Dariry & Eggs",
      icon: <BottleIcon />,
    },
    child: [
      {
        index: true,
        element: <HomePage />,
        state: "index",
      },
      {
        path: "/",
        element: <HomePage />,
        state: "eggs",
        sidebarProps: {
          displayText: "Eggs",
        },
      },
    ],
  },
];

export default appRoutes;
