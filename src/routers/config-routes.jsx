import { Navigate, useRoutes } from "react-router-dom";
import { Home, IntoProcesses, T55 } from "../pages";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <IntoProcesses />,
  },
  {
    path: "/cars",
    element: <IntoProcesses />,
  },
  {
    path: "/cars/t55",
    element: <T55 />,
  },
  {
    path: "/category",
    element: <IntoProcesses />,
  },

  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
];

export const ConfigRoues = () => {
  return useRoutes([...routes]);
};
