
const ErrorPage = () => {
    return (
        <div className="bg-base-300 min-h-screen flex justify-center items-center">
            <div className="text-center space-y-8">
                <h1 className="text-7xl font-bold">404 error</h1>
                <p className="text-xl font-medium">This page doesn't exist.</p>
                <p className="text-xl font-medium">Would you like to <span className="text-red-400">learn about HTTP error?</span></p>
            </div>
        </div>
    );
};

export default ErrorPage;