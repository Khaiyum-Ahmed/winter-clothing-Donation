import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import DonationCard from "../Components/DonationCard";

const DonationCampaign = () => {
    const [donation, setDonation] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setDonation(data))
    },[])
    return (
        <div>
            <header className="bg-[#21293b]">
                <Navbar></Navbar>
            </header>
            <main className="my-20 max-w-11/12 mx-auto">
            
                <div  className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                    {
                        donation.map(donateInfo => <DonationCard key={donateInfo.id} donateInfo={donateInfo}></DonationCard>)
                    }
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default DonationCampaign;