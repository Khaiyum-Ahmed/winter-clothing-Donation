import { useContext } from "react";
import { DonationContext } from "../Provider/DonationProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user}   = useContext(DonationContext);

    if(user && user?.email){
        return children;
    }

    return (
        <Navigate to={"/auth/login"}></Navigate>
    );
};

export default PrivateRoute;