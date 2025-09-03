import { FaHeart } from "react-icons/fa";
import img from "../assets/choose-image.jpg"
const FAQ = () => {
    return (
        <div className="hero py-12">

            <div className="hero-content max-w-11/12 mx-auto gap-8 flex-col lg:flex-row-reverse">
                <div className="relative">
                    <div className="bg-[rgba(0,3,13,0.6)] w-full h-full absolute top-0 left-0 rounded-lg"></div>
                    <img
                        src={img}
                        className="max-w-xl rounded-lg shadow-2xl"
                    />
                </div>

                <div>
                    <h2 className="mb-3 flex items-center text-3xl font-semibold text-yellow-600"> <span className="mr-3"><FaHeart /></span> FAQ</h2>
                    <p className="text-base text-gray-600 font-medium mb-8">"Common Questions About Winter Donations!"</p>

                    <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
                        <div className="collapse-title font-semibold">Q1: What type of clothes can I donate?</div>
                        <div className="collapse-content text-sm">
                           👉 We accept clean and gently used winter clothes such as jackets, sweaters, shawls, blankets, and warm children’s wear. Please avoid torn or unusable items.
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
                        <div className="collapse-title font-semibold">Q2: How can I donate my clothes?</div>
                        <div className="collapse-content text-sm">
                            👉 You can drop your donations at our nearest collection point or request a pickup through our website. Our volunteers will coordinate with you.
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
                        <div className="collapse-title font-semibold">Q3: Are there any costs involved in donating?</div>
                        <div className="collapse-content text-sm">
                          👉 No, donating is completely free. We cover all collection and distribution costs with the help of our volunteers and partners.
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
                        <div className="collapse-title font-semibold">Q4: Where are the collection points located?</div>
                        <div className="collapse-content text-sm">
                            👉 Our collection centers are available in Dhaka, Chattogram, Sylhet, and Rajshahi. You can check our “How It Works” section for details.
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
                        <div className="collapse-title font-semibold">Q5: Who receives the donated clothes?</div>
                        <div className="collapse-content text-sm">
                           👉 We distribute donations directly to underprivileged families, street children, and rural communities across Bangladesh, especially in colder regions.
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
                        <div className="collapse-title font-semibold">Q6: How do I know my donation reaches the right people?</div>
                        <div className="collapse-content text-sm">
                          👉 We ensure transparency by working with trusted local partners and volunteers. Updates and impact stories are regularly shared on our website and social media.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;