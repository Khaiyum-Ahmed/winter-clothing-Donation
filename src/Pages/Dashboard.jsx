import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Dashboard = () => {
    return (
        <div>
            <header className="bg-[#21293b]">
                <Navbar></Navbar>
            </header>
            <main className='max-w-11/12 mx-auto py-20'>
                <h1>user dashboard</h1>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Dashboard;