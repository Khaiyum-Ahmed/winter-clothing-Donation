import { Link } from "react-router-dom";

const DonationCard = ({ donateInfo }) => {
    
    const { description, division, image, status, title,id } = donateInfo;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-5 pt-5">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl w-full h-[250px]" />
            </figure>
            <div className="card-body">
                <h4 className="font-medium">{status}</h4>
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <h4 className="card-title">Location:  {division}</h4>
                
                <div className="card-actions justify-center pt-8">
                    <Link to={`/donationCard/${id}`}><button className="btn btn-primary bg-amber-500 text-white border-none">Donate Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;