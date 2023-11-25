import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Studio, Templates, BuildCustomTemplate } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/templates",
    element: <Templates />,
  },
  {
    path: "/studio",
    element: <Studio />
  },
  {
    path: '/build-custom-template',
    element: <BuildCustomTemplate />
  }
]);