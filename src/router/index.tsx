import { createBrowserRouter } from "react-router-dom";
import PostList from "../pages/post";
import CurrencyConvertForm from "../components/CurrencyConvert";
import StopWatch from "../components/StopWatch";
import CustomStyle from "../components/CustomStyle";
import Login from "../pages/login";
import Layout from "../layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
