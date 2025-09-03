import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import About from "../Components/About";

const Home = () => {
    return (
        <div>
            <nav className="bg-[#21293b]">
                <Navbar></Navbar>
            </nav>
            <header>
                <Header></Header>
            </header>
            <main className="max-w-11/12 mx-auto">
                <About></About>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;