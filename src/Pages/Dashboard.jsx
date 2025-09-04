import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { DonationContext } from '../Provider/DonationProvider';

const Dashboard = () => {
    const { user } = useContext(DonationContext);
    console.log(user)
    return (
        <div>
            <header className="bg-[#21293b]">
                <Navbar></Navbar>
            </header>
            <main className='max-w-11/12 mx-auto py-20'>
                <h1 className='pb-12 text-center font-bold text-3xl'>User_Profile</h1>
                <div className="hero">
                        <div className='text-center'>
                            <img className='w-[400px] h-[200px] rounded-2xl mx-auto mb-12' src={user.photoURL} alt="" />
                            <h1 className="text-5xl font-bold">{user.displayName}</h1>
                            <p className="py-3 text-gray-500 ">
                                {user.email}
                            </p>
                            <button className="btn btn-secondary bg-amber-500 border-none text-xl text-white">Update</button>
                        </div>
                    
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Dashboard;