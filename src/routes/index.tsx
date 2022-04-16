import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Mocks } from "../pages/Mocks";

export const AppRoutes = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/mocks",
      element: <Mocks />,
    },
  ];
  const element = useRoutes([...routes]);

  return <>{element}</>;
};
