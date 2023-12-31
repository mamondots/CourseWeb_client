import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Sharded/Navbar/Navbar";
import Footer from "../Pages/Sharded/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;