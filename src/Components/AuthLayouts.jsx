import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const AuthLayouts = () => {
    return (
        <div>
            <header className="bg-[#21293b]">
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayouts;