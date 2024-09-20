import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Form from "./pages/Form";

//TODO: remover route App.jsx
import App from "./App";

export const router = createBrowserRouter([
  //TODO: remover route App.jsx
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/form",
        element: <Form />,
      },
    ],
  },
]);
