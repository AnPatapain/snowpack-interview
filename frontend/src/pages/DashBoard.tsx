import React, {useState} from "react";
import SearchBar from "../components/SearchBar";
import Images from "../components/Images";
import useFetch from "../hooks/useFetch";

const DashBoard: React.FC = () => {
    const [query, setQuery] = useState<string>("");

    const fetchConfig = {
        url: "",
        params: {q: encodeURIComponent(query), image_type: "photo", pretty: "tr"}
    }

    const [data, error, loading] = useFetch<any>(fetchConfig,
        [fetchConfig.url, fetchConfig.params.q, fetchConfig.params.image_type, fetchConfig.params.pretty]);

    const handleSearch = async (query: string) => {
        setQuery(query);
    }

    return (
        <div className="text-center">
            <h1 className="my-8 text-3xl font-bold">Hi 👋, What image you want to search today ?</h1>
            <SearchBar query={query} searchHandler={handleSearch}/>
            <br/>
            <Images images={data ? data.hits : []} loading={loading}/>
        </div>
    )
}

export default DashBoard;