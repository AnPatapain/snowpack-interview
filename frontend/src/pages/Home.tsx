import React, {useState} from "react";
import AuthModal from "../components/AuthModal";

const Home: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    const handleSignupClick = () => {
        setShowModal(true);
        setIsSignup(true);
    }

    const handleLoginClick = () => {
        setShowModal(true);
        setIsSignup(false);
    }

    return (
        <div className="h-full flex justify-center">
            <div className="my-60">
                <h1 className="text-6xl font-bold">Image Search Engine 🔎</h1>
                <article className="my-4">
                    <p className="text-xl font-normal">Search image here</p>
                </article>

                {showModal ? (
                    <AuthModal setShowModal={setShowModal} isSignup={isSignup} setIsSignup={setIsSignup}/>
                ) : (
                    <div className="flex my-8" dir="ltr">
                        <button className="btn bg-neutral-200 text-xl me-2" onClick={handleSignupClick}>Create Account</button>
                        <button className="btn btn-outline text-xl" onClick={handleLoginClick}>Log in</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home;