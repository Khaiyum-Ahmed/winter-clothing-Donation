import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AuthLayouts = () => {
    return (
        <div>
            <header className="bg-[#21293b]">
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayouts;