import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo (1).png"
import { useContext } from "react";
import { DonationContext } from "../Provider/DonationProvider";
const Navbar = () => {
    const { user,logOut } = useContext(DonationContext);
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/donationCampaigns">Donation campaigns</NavLink></li>
        <li><NavLink to="/howToHelp">How to Help</NavLink></li>

    </>
    return (
        <div className="max-w-11/12 mx-auto py-3">
            <div className="navbar bg-[#21293b]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-white text-base menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-2.5 items-center">
                        {
                            user && user?.email ? (
                                <div>
                                    <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
                                    <p className="text-white font-medium">{user?.displayName}</p>
                                </div>
                            ) : ("")
                        }
                        {
                            user && user?.email ? (<button onClick={logOut} className="btn ml-4">Logout</button>) :
                                (<Link to="/auth/login" className="btn">Login</Link>)
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;