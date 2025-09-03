import { FaHeart } from "react-icons/fa";

const HowItWorks = () => {
    const divisions = [
        "Dhaka",
        "Chattogram",
        "Khulna",
        "Rajshahi",
        "Barishal",
        "Sylhet",
        "Rangpur",
        "Mymensingh",
    ];

    const collectionPoints = {
        Dhaka: ["Dhanmondi", "Uttara", "Mirpur"],
        Chattogram: ["Agrabad", "GEC Circle"],
        Sylhet: ["Zindabazar", "Moulvibazar", "Sreemongal"],
        Rajshahi: ["Shaheb Bazar"],
    };
    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto px-6">
                {/* <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2> */}
                <h2 className="mb-10 text-3xl font-semibold text-yellow-600 flex justify-center items-center"> <span className="mr-3"><FaHeart /></span> How It Works</h2>

                {/* Step 1 - Instructions */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-3">1. Donate Clothes</h3>
                    <p className="text-gray-600">
                        Choose the winter clothes you no longer use. Make sure they are clean and in good condition.
                        Pack them securely and either drop them at our collection points or schedule a pickup through our website.
                    </p>
                </div>

                {/* Step 2 - Collection Points */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-3">2. Collection Points</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        {Object.entries(collectionPoints).map(([city, places], idx) => (
                            <li key={idx}>
                                <strong>{city}:</strong> {places.join(", ")}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Step 3 - Supported Divisions */}
                <div>
                    <h3 className="text-2xl font-semibold mb-3">3. Supported Divisions</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {divisions.map((division, index) => (
                            <div
                                key={index}
                                className="p-4 bg-white rounded-xl shadow text-center text-gray-700 font-medium"
                            >
                                {division}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;