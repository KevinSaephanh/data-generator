import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Guide } from "../pages/Guide";
import { Mocks } from "../pages/Mocks";

export const AppRoutes = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/guide",
      element: <Guide />,
    },
    {
      path: "/mocks",
      element: <Mocks />,
    },
  ];
  const element = useRoutes([...routes]);

  return <>{element}</>;
};
