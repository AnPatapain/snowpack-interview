import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

export const navLinks = [
    {
        id: "dashboard",
        title: "Home",
    },
    {
        id: "profile",
        title: "Profiles",
    },
];

interface NavBarProps {
    activeItem: string;
}

const Navbar: React.FC<NavBarProps> = (props) => {
    const navigate = useNavigate();
    const [active, setActive] = useState("Home");

    const handleLogout = () => {
        localStorage.clear();
        navigate("/dashboard");
    }

    return (
        <nav className="w-full flex py-2 justify-between items-center navbar bg-slate-50">
            <h1 className="text-3xl font-bold cursor-pointer" onClick={() => {navigate("/")}} >️🕵🏻‍♂️ Sherlock</h1>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`cursor-pointer ${props.activeItem === nav.id ? "bg-slate-300 px-2 rounded" : "text-black"
                        } mr-4`}
                        onClick={() => setActive(nav.id)}
                    >
                        <a onClick={()=>{navigate(`/${nav.id}`)}}>{nav.title}</a>
                    </li>
                ))}
                <li className="cursor-pointer" onClick={() => {handleLogout()}}>Logout</li>
            </ul>
        </nav>
    );
};

export default Navbar;