import { createBrowserRouter } from "react-router-dom";
import Categories from "../../Pages/Categories/Categories/Categories";
import Home from "../../Pages/Home/Home";
import Main from "../../Pages/Layouts/Main/Main";
import Login from "../../Pages/Registration/Login/Login";
import Register from "../../Pages/Registration/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router=createBrowserRouter([
    {
       path:'/',
       element:<Main></Main>,
       children:([
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element:<Register></Register>
        },
        {
            path:'/category/:categoryName',
            element:<PrivateRoute><Categories></Categories></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/categoryitems?categoryName=${params.categoryName}`)
            
        }
       ])
    }
])