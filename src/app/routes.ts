import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { PatternPage } from "./pages/PatternPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/pattern/:patternId",
    Component: PatternPage,
  },
]);
