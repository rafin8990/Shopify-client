import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../Pages/Layouts/Main/Main";

export const router=createBrowserRouter([
    {
       path:'/',
       element:<Main></Main>,
       children:([
        {
            path:'/',
            element:<Home></Home>
        }
       ])
    }
])