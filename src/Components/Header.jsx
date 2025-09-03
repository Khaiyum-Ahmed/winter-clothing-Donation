import banner01 from "../assets/banner-01.jpg"
import banner02 from "../assets/banner-02.jpg"
import banner03 from "../assets/banner-03.jpg"
const Header = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="absolute text-center top-1/3 lg:left-1/4 md:left-1/9 max-w-5xl z-10">
                        <h1 className="text-white font-bold lg:text-5xl md:text-4xl mb-8">Your Donation Help to Change <br /> Some one's <span className="text-yellow-500">Life better.</span></h1>
                        <p className="text-gray-300">encourages support for people in need during cold weather, highlighting how donations of essentials like blankets, coats, and food provide warmth and comfort</p>
                    </div>
                    <div className="bg-[#00030dcc] w-full h-full absolute top-0 left-0"></div>
                    <img
                        src={banner01}
                        className="w-full h-[600px]" />
                    <div className="absolute left-5 right-5 md:top-1/2 lg:top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                        <div className="absolute text-center top-1/3 lg:left-1/4 md:left-1/9 max-w-5xl z-10">
                        <h1 className="text-white font-bold lg:text-5xl md:text-4xl mb-8">Your Donation Help to Change <br /> Some one's <span className="text-yellow-500">Life better.</span></h1>
                        <p className="text-gray-300">encourages support for people in need during cold weather, highlighting how donations of essentials like blankets, coats, and food provide warmth and comfort</p>
                    </div>
                    <div className="bg-[#00030dcc] w-full h-full absolute top-0 left-0"></div>
                    <img
                        src={banner02}
                        className="w-full h-[600px]" />
                    <div className="absolute left-5 right-5 md:top-1/2 lg:top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                        <div className="absolute text-center top-1/3 lg:left-1/4 md:left-1/9 max-w-5xl z-10">
                        <h1 className="text-white font-bold lg:text-5xl md:text-4xl mb-8">Your Donation Help to Change <br /> Some one's <span className="text-yellow-500">Life better.</span></h1>
                        <p className="text-gray-300">encourages support for people in need during cold weather, highlighting how donations of essentials like blankets, coats, and food provide warmth and comfort</p>
                    </div>
                    <div className="bg-[#00030dcc] w-full h-full absolute top-0 left-0"></div>
                    <img
                        src={banner03}
                        className="w-full h-[600px]" />
                    <div className="absolute left-5 right-5 md:top-1/2 lg:top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                        <div className="absolute text-center top-1/3 lg:left-1/4 md:left-1/9 max-w-5xl z-10">
                        <h1 className="text-white font-bold lg:text-5xl md:text-4xl mb-8">Your Donation Help to Change <br /> Some one's <span className="text-yellow-500">Life better.</span></h1>
                        <p className="text-gray-300">encourages support for people in need during cold weather, highlighting how donations of essentials like blankets, coats, and food provide warmth and comfort</p>
                    </div>
                    <div className="bg-[#00030dcc] w-full h-full absolute top-0 left-0"></div>
                    <img
                        src={banner02}
                        className="w-full h-[600px]" />
                    <div className="absolute left-5 right-5 md:top-1/2 lg:top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;