import { useState } from "react";
import {useNavigate} from "react-router-dom";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "profile",
        title: "Profiles",
    },
];

const Navbar = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState("Home");

    return (
        <nav className="w-full flex py-2 justify-between items-center navbar bg-slate-50">
            <h1 className="text-3xl font-bold cursor-pointer" onClick={() => {navigate("/")}} >️🕵🏻‍♂️ Sherlock</h1>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${
                            active === nav.title ? "bg-slate-300 px-2 rounded" : "text-black"
                        } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                        onClick={() => setActive(nav.title)}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;