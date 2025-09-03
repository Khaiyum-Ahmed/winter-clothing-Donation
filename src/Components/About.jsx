import banner from "../assets/banner-03.jpg"
import 'animate.css';
import { FaHeart } from "react-icons/fa";
const About = () => {
    return (
        <div className="hero py-10">
            <div className="hero-content gap-8 flex-col lg:flex-row ">
                
               <div className="relative">
                <div className="bg-[rgba(0,3,13,0.5)] w-full h-full absolute top-0 left-0 rounded-lg"></div>
                 <img
                    src={banner}
                    className="max-w-xl rounded-lg shadow-2xl"
                />
               </div>
                <div>
                    <h2 className="mb-5 text-3xl font-semibold text-yellow-600 flex items-center"> <span className="mr-3"><FaHeart /></span> About Us</h2>
                    <h1 className="text-5xl font-bold animate__fadeInTopLeft">Together for a Warmer Bangladesh</h1>
                    <p className="py-6 animate__fadeInBottomRight">
                       Every winter, countless families in Bangladesh face the bitter cold without proper clothing. We believe warmth is a basic right, not a privilege. By joining hands with compassionate donors and volunteers, we strive to provide winter clothes, spread hope, and build a caring community for a warmer Bangladesh.
                    </p>
                    <button className="btn btn-primary bg-amber-500 border-none text-white">Learn More </button>
                </div>
            </div>
        </div>
    );
};

export default About;