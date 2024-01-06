import React, {useEffect, useState} from "react";
import SearchBar from "../components/SearchBar";
import Images from "../components/Images";
import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";
import NavBar from "../components/Nav";
import AddCollection from "../components/AddCollection";
import UserService from "../services/User.service";
import {useNavigate} from "react-router-dom";
import {USER} from "../constant";

const DashBoard: React.FC = () => {
    const [query, setQuery] = useState<string>("");
    const debounceQuery = useDebounce(query, 500);
    const [showAddCollection, setShowAddCollection] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string>("");

    // const [page, setPage] = useState(0)
    // const [pageSize, setPageSize] = useState(50)
    // const [isFetching, setIsFetching] = useState(false)

    const fetchConfig = {
        url: "/api/pixabay/",
        params: {q: debounceQuery}
    }
    const [data, error, loading] = useFetch<any>(fetchConfig,
        [fetchConfig.url, fetchConfig.params.q]);

    const handleSearch = async (query: string) => {
        setQuery(query);
    }

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await UserService.getMyProfile();
                localStorage.setItem(USER, user._id);
            }catch (error) {
                localStorage.setItem(USER, "");
            }
        }
        fetchUser();
    }, [])

    // const handleScroll = () => {
    //     if(Math.ceil(window.innerHeight + document.documentElement.scrollTop) >=
    //         document.documentElement.offsetHeight && !isFetching) {
    //         setPage(prevState => prevState + 1)
    //         setIsFetching(true)
    //     }
    // };

    return (
        <div className="text-center">
            <NavBar activeItem="dashboard"/>
            <h1 className="my-8 text-2xl font-bold">Hello Detective 👋, Which image do you want to investigate today ?</h1>
            <SearchBar query={query} searchHandler={handleSearch}/>
            <br/>
            <Images images={data ? data.hits : []} loading={loading}
                    setShowAddCollection={setShowAddCollection}
                    setSelectedImage={setSelectedImage}/>

            <AddCollection showAddCollection={showAddCollection}
                           selectedImage={selectedImage}
                           setShowAddCollection={setShowAddCollection}/>
        </div>
    )
}

export default DashBoard;