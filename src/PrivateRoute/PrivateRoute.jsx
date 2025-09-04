import { useContext } from "react";
import { DonationContext } from "../Provider/DonationProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading";

const PrivateRoute = ({children}) => {

    const {user, loading}   = useContext(DonationContext);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children;
    }

    return (
        <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
    );
};

export default PrivateRoute;