import React from "react";

interface SearchBarProps {
    query: string;
    searchHandler: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
    return (
        <div className= "flex justify-center gap-2">
            <input className="border-solid border-2 border-black rounded-md px-2 w-96 mx-0.5 "
                   type="text" value={props.query}
                   onChange={e => props.searchHandler(e.target.value)}
                   placeholder="Search for images"
            />
            <button className="btn btn-md h-full bg-slate-50 text-xl" onClick={() => props.searchHandler(props.query)}>🔎</button>
        </div>
    )
}

export default SearchBar;