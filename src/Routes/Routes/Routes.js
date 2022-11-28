import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Pages/Blog/Blog";
import Categories from "../../Pages/Categories/Categories/Categories";
import Addproduct from "../../Pages/DashBoard/AddProduct/Addproduct";
import AllBuyer from "../../Pages/DashBoard/AllBuyer/AllBuyer";
import Allseller from "../../Pages/DashBoard/AllSeller/Allseller";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../../Pages/DashBoard/MyProducts/MyProducts";
import Payment from "../../Pages/DashBoard/Payment/Payment";
import WishList from "../../Pages/DashBoard/WishList/WishList";
import Home from "../../Pages/Home/Home";
import DashboardLayout from "../../Pages/Layouts/DashboardLayout/DashboardLayout";
import Main from "../../Pages/Layouts/Main/Main";
import Login from "../../Pages/Registration/Login/Login";
import Register from "../../Pages/Registration/Register/Register";
import ErrorElements from "../../Pages/Shered/ErrorElements/ErrorElements";
import AdminRoute from "../AdminRoutes/AdminRoute";
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
            path:'/blog',
            element:<Blog></Blog>
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
            loader:({params})=>fetch(`https://shopify-server.vercel.app/categoryitems?categoryName=${params.categoryName}`)
            
        }
       ])
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement:<ErrorElements></ErrorElements>,
        children:[
           
            {
                path:'/dashboard',
                element:<PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path:'/dashboard/wishlist',
                element:<PrivateRoute><WishList></WishList></PrivateRoute>
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader:({params})=>fetch(`https://shopify-server.vercel.app/booking/${params.id}`)
            },
            {
                path:'/dashboard/addproduct',
                element:<Addproduct></Addproduct>
            },
            {
                path:'/dashboard/myproducts',
                element:<MyProducts></MyProducts>
            },
            {
                path:'/dashboard/allseller',
                element:<AdminRoute><Allseller></Allseller></AdminRoute>
            },
            {
                path:'/dashboard/allbuyer',
                element:<AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
           
        ]
        
    }
])