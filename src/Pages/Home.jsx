import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import About from "../Components/About";
import HowItWorks from "../Components/HowItWorks";
import FAQ from "../Components/FAQ";

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
                <HowItWorks></HowItWorks>
                <FAQ></FAQ>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;