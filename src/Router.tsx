import { createBrowserRouter } from "react-router-dom";
import NotFound from "./routes/NotFound";
import Root from "./routes/Root";
import Character from "./routes/Character";
import Characters from "./routes/Characters";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Characters />,
      },
      {
        path: "/character/:id",
        element: <Character />,
      },
    ],
  },
]);

export default router;
