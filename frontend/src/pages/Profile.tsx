import React, {useEffect, useState} from "react";
import Navbar from "../components/Nav";
import UserService from "../services/User.service";
import Collection from "../components/Collection";
import {useNavigate} from "react-router-dom";

interface Collection {
    name: string;
    images: string[];
}

interface User {
    email: string;
    collections: Collection[];
}

const Profile: React.FC = () => {
    const [user, setUser] = useState<User>({email: "", collections: []});
    const navigate = useNavigate();

    useEffect(() => {
        const getMyProfile = async () => {
            try {
                const data = await UserService.getMyProfile();
                setUser({
                    email: data.email,
                    collections: data.collections
                });
            }catch (error) {
                setUser({
                    email: "",
                    collections: []
                })
            }
        }

        getMyProfile()
    }, [])

    return (
        <div>
            <Navbar activeItem="profile"/>
            <div className="text-center my-10">
                <h1 className="text-3xl font-bold">Detective profile 🗂️</h1>
                {user.email === "" && <button className="btn w-1/3 btn-success text-xl my-2" onClick={() => {navigate("/home")}}>Login</button>}
                {user.collections.map((collection, key) => {
                    return <Collection key={key} collectionName={collection.name} images={collection.images}/>
                })
                }
            </div>
        </div>
    );
}

export default Profile;