import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Register/Login/Login";
import Singup from "../Pages/Register/Singup/Singup";
import CoursesCon from "../Pages/Courses/CoursesContentPage/CoursesCon";
import InstructPage from "../Pages/InstructPage/InstructPage";
import Shop from "../Pages/ShopPage/Shop/Shop";
import BlogCon from "../Pages/BlogPage/BlogCon/BlogCon";
import CoursesDetails from "../Pages/Courses/CoursesDetails/CoursesDetails";
import EventPage from "../Pages/EventPage/EventPage";
import BlogDetailsPage from "../Pages/BlogDetailsPage/BlogDetailsPage";
import ProductDetails from "../ProductDetails/ProductDetails";
import CheckOut from "../CheckOut/CheckOut";
import AdminDasboard from "../Dasboard/DasboardPage/AdminDasbord/AdminDasboard";
import AdminHome from "../Dasboard/DasboardPage/AdminHome/AdminHome";
import AddCourses from "../Dasboard/DasboardPage/AddCourses/AddCourses";
import ManageCourses from "../Dasboard/DasboardPage/ManageCourses/ManageCourses";
import UpdateCourse from "../Dasboard/DasboardPage/UpdateCourse/UpdateCourse";
import AddProduct from "../Dasboard/DasboardPage/AddProduct/AddProduct";
import ManageProducts from "../Dasboard/DasboardPage/ManageProducts/ManageProducts";
import ManageUser from "../Dasboard/DasboardPage/ManageUser/ManageUser";
  
export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/coursesCon',
            element:<CoursesCon></CoursesCon>
        },
        {
            path:'/courseDetails/:id',
            element:<CoursesDetails></CoursesDetails>
        },
        {
            path:'/eventDetails/:id',
            element:<EventPage></EventPage>
        },
        {
            path:'/blogDetails/:id',
            element:<BlogDetailsPage></BlogDetailsPage>
        },
        {
            path:'/productDetails/:id',
            element:<ProductDetails></ProductDetails>
        },
        {
            path:'/instructor',
            element:<InstructPage></InstructPage>
        },
        {
            path:'/shoppage',
            element:<Shop></Shop>
        },
        {
            path:'/blogcon',
            element:<BlogCon></BlogCon>
        },
        {
            path:'/checkout',
            element:<CheckOut></CheckOut>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/singup',
          element:<Singup></Singup>
        }
      ]
    },

    {
      path:'/dasboard',
      element:<AdminDasboard></AdminDasboard>,
      children:[
        {
          path:'/dasboard',
          element:<AdminHome></AdminHome>
        },
        {
          path:'/dasboard/addcourses',
          element:<AddCourses></AddCourses>
        },
        {
          path:'/dasboard/managecourses',
          element:<ManageCourses></ManageCourses>
        },
        {
          path:'/dasboard/updatecourse/:id',
          element:<UpdateCourse></UpdateCourse>
        },
        {
          path:'/dasboard/addproduct',
          element:<AddProduct></AddProduct>
        },
        {
          path:'/dasboard/manageproduct',
          element:<ManageProducts></ManageProducts>
        },
        {
          path:'/dasboard/manageuser',
          element:<ManageUser></ManageUser>
        }
      ]
    }
  ]);