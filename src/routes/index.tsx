import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "../pages/notFound";
import { AgendaOverview } from "../pages/agenda-overview";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AgendaOverview />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
