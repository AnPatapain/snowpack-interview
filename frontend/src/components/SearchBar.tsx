import React from "react";

interface SearchBarProps {
    query: string;
    searchHandler: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
    return (
        <div>
            <input className="border-solid border-2 border-black rounded-md px-2 w-96 h-10"
                   type="text" value={props.query}
                   onChange={e => props.searchHandler(e.target.value)}
                   placeholder="Search for images"
            />
            <button className="btn btn-md bg-neutral-300" onClick={() => props.searchHandler(props.query)}>Search 🔎</button>
        </div>
    )
}

export default SearchBar;