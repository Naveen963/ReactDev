import { useState } from "react"


const Search = (props) => {
    const [search, setSearch] = useState("")
    return (
        <div className="search">
            <input className="searchBox" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search...."
                onKeyUp={(e) => e.key == 'Enter' && props.searchFilter(search)} />
            <button className="search-btn" onClick={() => props.searchFilter(search)} >Search</button>
        </div>
    )
}

export default Search