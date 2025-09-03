import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
 import { ToastContainer, toast } from 'react-toastify';
const DonationDetails = () => {
    const { id } = useParams();
    const donate_id = parseInt(id);
    const data = useLoaderData();

    const donationInfo = data.find(donationInfo => donationInfo.id === donate_id);

    const { title, image, description, status, contactinfo, division } = donationInfo;
    const notify = () => toast.success("Thank you | We will reach your destination soon.");
    console.log(title)
    return (
        <div>
            <header className="bg-[#21293b]">
                <Navbar></Navbar>
            </header>
            <main className=" max-w-11/12 mx-auto py-20">
                <div className="card bg-base-100 md:w-full lg:w-6xl mx-auto shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={image}
                            alt="Shoes"
                            className="rounded-xl w-full h-[600px]" />
                    </figure>
                    <div className="card-body">
                        <h4 className="font-medium">{status}</h4>
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                        <h4 className="card-title">Location:  {division}</h4>
                        <p className="text-gray-500">{contactinfo}</p>
                        <div className="py-10">
                            <h1 className="text-2xl font-bold text-center">Donation Form Field</h1>
                        </div>
                        <div>
                            <select defaultValue="Quantity of items" className="select block mb-3 w-full">
                                <option disabled={true}>Quantity of items</option>
                                <option>2 Jackets</option>
                                <option>3 Blankets</option>
                                <option>5 Hoodie</option>
                            </select>
                            <select defaultValue="Item Types" className="select block mb-3 w-full">
                                <option disabled={true}>Item Types</option>
                                <option>Jackets</option>
                                <option>Blankets</option>
                                <option>Hoodie</option>
                                <option>Sweater</option>
                            </select>
                            <select defaultValue="Pickup Location" className="select block mb-3 w-full">
                                <option disabled={true}>Pickup Location</option>
                                <option>House 12, Road 5, Dhanmondi, Dhaka</option>
                                <option>Nearest Post Office</option>
                                <option>S.A Poribohon</option>
                                <option>Sundorban</option>
                            </select>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Additional notes</legend>
                                <textarea className="textarea h-24" placeholder="Your massage..."></textarea>
                                <div className="label">Optional</div>
                            </fieldset>
                        </div>
                        <div className="card-actions justify-center pt-8">
                            <button onClick={notify} className="btn btn-primary bg-amber-500 text-white border-none text-xl">Submit</button><ToastContainer position="top-center" />
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default DonationDetails;