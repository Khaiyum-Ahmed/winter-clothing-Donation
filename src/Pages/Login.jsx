import { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { DonationContext } from "../Provider/DonationProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const { googleSignIn, setUser, signInUsers, resetPassword } = useContext(DonationContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef();
    const [showPassword, setShowPassword] = useState(false);





    const handleLogIn = (e) => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;


        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            setError("Password must be at least 8 characters, include one uppercase, one lowercase, one number, and one special character.");
            return;
        }

        // users sign in
        signInUsers(email, password)
            .then(result => {

                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/")
            })
            .catch(err => {
                setError({ ...error, login: err.code })
            });
    }

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(err => {
                console.log(err.code)
            })
    }

    const handleForget = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert('Please provide a valid email address')
        }
        else {
            resetPassword(email)
                .then(() => {
                    alert("Password reset email sent, please check you email")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorCode, errorMessage)
                })

        }

    }

    return (
        <div className="max-w-11/12 mx-auto py-20">
            <h1 className="text-5xl font-bold text-center py-16">Login now!</h1>
            <div className="hero">

                <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogIn}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email"
                                    name="email"
                                    ref={emailRef}
                                    className="input w-full" placeholder="Email" required />

                                <div className="relative">
                                    <label className="label">Password</label>
                                    <input type={showPassword ? "text" : "password"}
                                        name="password"
                                        className="input w-full" placeholder="Password" required />
                                    <button onClick={() => setShowPassword(!showPassword)} className="btn btn-ghost absolute right-0">
                                        {
                                            showPassword ? <FaEye /> : <FaEyeSlash></FaEyeSlash>
                                        }
                                        
                                    </button>

                                </div>
                                {
                                    error.login && (<label className="label font-semibold text-base text-red-500">{error.login}</label>)
                                }

                                <div><a onClick={handleForget} className="link link-hover">Forgot password?</a></div>

                                <button className="btn btn-neutral bg-amber-500 border-none text-xl text-white mt-4">Login</button>

                            </fieldset>
                        </form>
                        <div className="pt-10">
                            <p onClick={handleGoogleLogIn} className="text-xl font-medium flex items-center justify-center cursor-pointer">Login With Google <span className="ml-2 text-2xl text-yellow-600"><FaGoogle /></span></p>
                        </div>
                        <div>
                            <p className="font-semibold text-base text-[#706F6F] mt-4 text-center">Don't Have An Account? <Link to="/auth/register" className="text-[#F75B5F]">Register</Link></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;