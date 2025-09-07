import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DonationContext } from "../Provider/DonationProvider";

const Register = () => {
    const { setUser, signUpUsers, updateUserProfile } = useContext(DonationContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters, include one uppercase, one lowercase, one number, and one special character.");
            return;
        }
        // create new users

        signUpUsers(email, password)
            .then(result => {

                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/");
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }
    return (
        <div>
            <div className="max-w-11/12 mx-auto py-20">
                <h1 className="text-5xl font-bold text-center py-16">Register now!</h1>
                <div className="hero">

                    <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input name="name" type="text" className="input w-full" placeholder="name" required />

                                    <label className="label">Photo_URL</label>
                                    <input name="photo" type="text" className="input w-full" placeholder="PhotoURL" required />

                                    <label className="label">Email</label>
                                    <input name="email" type="email" className="input w-full" placeholder="Email" required />

                                    <label className="label">Password</label>
                                    <input name="password" type="password" className="input w-full" placeholder="Password" required />

                                    <label className="label mt-3">
                                        <input type="checkbox" className="checkbox"
                                            required />
                                        Accept all trams and conditions!

                                    </label>

                                    <button className="btn btn-neutral bg-amber-500 border-none text-xl text-white mt-4">Register</button>

                                </fieldset>
                            </form>

                            <div>
                                <p className="font-semibold text-base text-[#706F6F] mt-4 text-center">Already Have An Account? <Link to="/auth/login" className="text-[#F75B5F]">Login</Link></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;