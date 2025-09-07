import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import PostList from "../components/Post";
import CurrencyConvertForm from "../components/CurrencyConvert";
import StopWatch from "../components/StopWatch";
import CustomStyle from "../components/CustomStyle";
import Login from "../pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/post", element: <PostList /> },
      {
        path: "/currency-convert",
        element: <CurrencyConvertForm />,
      },
      { path: "/stopwatch", element: <StopWatch /> },
      {
        path: "/custom-style-page",
        element: <CustomStyle />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
