import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Form from "./pages/Form";
import Home from "./pages/Home";

//TODO: remover route App.jsx

export const router = createBrowserRouter([
  //TODO: remover route App.jsx
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/home",
      //   element: <Home />,
      // },
      {
        path: "/form",
        element: <Form />,
      },
    ],
  },
]);
