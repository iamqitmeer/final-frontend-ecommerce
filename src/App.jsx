import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Register from "./Screens/Register.jsx/Register";
import MainPage from "./Screens/MainPage/MainPage";

function App() {
  let router = createBrowserRouter([
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: <MainPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
