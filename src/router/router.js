import Classes from "../pages/dashboard/Classes";
import CreateClass from "../pages/dashboard/createForms/CreateClass";
import CreateFee from "../pages/dashboard/createForms/CreateFee";
import CreateStudent from "../pages/dashboard/createForms/CreateStudent";
import CreateTransaction from "../pages/dashboard/createForms/CreateTransaction";
import Dashboard from "../pages/dashboard/Dashboard";
import EditClass from "../pages/dashboard/editForms/EditClass";
import EditFee from "../pages/dashboard/editForms/EditFee";
import EditStudent from "../pages/dashboard/editForms/EditStudent";
import EditTransaction from "../pages/dashboard/editForms/EditTransaction";
import Fees from "../pages/dashboard/Fees";
import Settings from "../pages/dashboard/Settings";
import Students from "../pages/dashboard/Students";
import Transactions from "../pages/dashboard/Transactions";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import DashTemp from "../templates/DashTemp";
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
        path: '/*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashTemp></DashTemp>,
    children: [
      {
        path: '',
        element: <Dashboard></Dashboard>
      },
      {
        path: 'students',
        element: <Students></Students>
      },
      {
        path: 'students/:id',
        element: <EditStudent></EditStudent>
      },
      {
        path: 'create/student',
        element: <CreateStudent></CreateStudent>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      },
      {
        path: 'classes/:id',
        element: <EditClass></EditClass>
      },
      {
        path: 'create/class',
        element: <CreateClass></CreateClass>
      },
      {
        path: 'fees',
        element: <Fees></Fees>
      },
      {
        path: 'fees/:id',
        element: <EditFee></EditFee>
      },
      {
        path: 'create/fee',
        element: <CreateFee></CreateFee>
      },
      {
        path: 'transactions',
        element: <Transactions></Transactions>
      },
      {
        path: 'transactions/:id',
        element: <EditTransaction></EditTransaction>
      },
      {
        path: 'create/transaction',
        element: <CreateTransaction></CreateTransaction>
      },
      {
        path: 'settings',
        element: <Settings></Settings>
      },
    ]
  }
]);