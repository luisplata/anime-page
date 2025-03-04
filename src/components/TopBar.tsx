import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
    const [query, setQuery] = useState("");  // Store input value
    const navigate = useNavigate();  // Navigation hook

    const handleSearch = () => {
        if (query.trim() !== "") {
            navigate(`/search?q=${encodeURIComponent(query)}`);
        }
    };

    return (
        <nav className="navbar navbar-dark bg-dark px-3">
            <a className="navbar-brand" href="/">AnimeFLV Clone</a>
            <div className="d-flex">
                <a href="/directory" className="btn btn-outline-light me-2">Anime Directory</a>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search anime..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Search on Enter key
                />
                <button className="btn btn-primary" onClick={handleSearch}>Search</button>
            </div>
        </nav>
    );
};

export default TopBar;
