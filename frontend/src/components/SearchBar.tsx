import React, {useState} from "react";

interface SearchBarProps {
    searchHandler: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
    const [query, setQuery] = useState('');

    const onKeyDownHandler = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter') {
            props.searchHandler(query);
        }
    }

    return (
        <div>
            <input className="border-solid border-2 border-black rounded-md px-2"
                   type="text" value={query}
                   onChange={e => setQuery(e.target.value)}
                   onKeyDown={onKeyDownHandler}
                   placeholder="Search for images"
            />
            <button className="btn btn-sm bg-neutral-300" onClick={() => props.searchHandler(query)}>Search 🔎</button>
        </div>
    )
}

export default SearchBar;