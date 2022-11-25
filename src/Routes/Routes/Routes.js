import { createBrowserRouter } from "react-router-dom";
import Categories from "../../Pages/Categories/Categories/Categories";
import Addproduct from "../../Pages/DashBoard/AddProduct/Addproduct";
import AllBuyer from "../../Pages/DashBoard/AllBuyer/AllBuyer";
import Allseller from "../../Pages/DashBoard/AllSeller/Allseller";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../../Pages/DashBoard/MyProducts/MyProducts";
import Home from "../../Pages/Home/Home";
import Main from "../../Pages/Layouts/Main/Main";
import Login from "../../Pages/Registration/Login/Login";
import Register from "../../Pages/Registration/Register/Register";
import ErrorElements from "../../Pages/Shered/ErrorElements/ErrorElements";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router=createBrowserRouter([
    {
       path:'/',
       element:<Main></Main>,
       errorElement:<ErrorElements></ErrorElements>,
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
            
        },
        {
            path:'/addproduct',
            element:<Addproduct></Addproduct>
        },
        {
            path:'/myorders',
            element:<MyOrders></MyOrders>
        },
        {
            path:'/myproducts',
            element:<MyProducts></MyProducts>
        },
        {
            path:'/allseller',
            element:<Allseller></Allseller>
        },
        {
            path:'/allbuyer',
            element:<AllBuyer></AllBuyer>
        }
       ])
    }
])