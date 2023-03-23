import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Home from "../../pages/Home/Home/Home";

export const router = createBrowserRouter([
    
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {

                path: '/blog',
                element: <Blog></Blog>
            },
            {

                path: '/login',
                element: <Login></Login>
            },
            {

                path: '/register',
                element: <Register></Register>
            },
        ]
 }



])