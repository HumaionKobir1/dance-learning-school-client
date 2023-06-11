import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AllClasses from "../pages/AllClasses/AllClasses";
import AllInstructor from "../pages/AllInstructor/AllInstructor";
import DashboardLayout from "../layouts/DashboardLayout";
import AddClassForm from "../components/Dashboard/AddClassForm";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../components/Dashboard/AllUsers";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signUp',
            element: <SignUp></SignUp>
        },
        {
          path: '/allClasses',
          element: <AllClasses></AllClasses>
        },
        {
          path: '/allInstructor',
          element: <AllInstructor></AllInstructor>
        }
        
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute> ,
      children: [
        {
          path: '/dashboard/add-class',
          element: <PrivateRoute><AddClassForm></AddClassForm></PrivateRoute>
        },
        {
          path: '/dashboard/all-users',
          element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute>
        }
      ]
    }
  ]);

  export default router;