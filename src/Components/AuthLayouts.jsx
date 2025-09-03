import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const AuthLayouts = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayouts;