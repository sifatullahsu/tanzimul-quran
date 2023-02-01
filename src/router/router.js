import Dashboard from "../pages/dashboard/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import MainTemp from "../templates/MainTemp";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainTemp></MainTemp>,
    children: [
      {
        path: '',
        element: <HomePage></HomePage>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
]);