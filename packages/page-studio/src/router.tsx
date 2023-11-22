import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Studio, Templates } from "./pages";

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
]);