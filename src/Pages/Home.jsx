import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {
    return (
        <div>
                <nav className="bg-[#21293b]">
                    <Navbar></Navbar>
                </nav>

            <header className="max-w-11/12 mx-auto">
                <Header></Header>
            </header>
            <main className="max-w-11/12 mx-auto">
                <Outlet></Outlet>
            </main>
            <footer className="max-w-11/12 mx-auto">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;