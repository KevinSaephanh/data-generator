import { useRoutes } from "react-router-dom";
import { Home } from "../features/Home";
import { Guide } from "../features/Guide";
import { Mocks } from "../features/Mocks";

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
