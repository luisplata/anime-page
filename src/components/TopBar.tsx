import {useState} from "react";
import {useNavigate} from "react-router-dom";

const TopBar = () => {
    const [query, setQuery] = useState("");  // Store input value
    const navigate = useNavigate();  // Navigation hook

    const handleSearch = () => {
        if (query.trim() !== "") {
            navigate(`/search?q=${encodeURIComponent(query)}`);
        }
    };

    return (
        <nav className="navbar navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img
                        src="/assets/animebell_logo.png?v=1"
                        alt="Logo"
                        width="35"
                        height="35"
                        className="d-inline-block align-text-top"
                    />
                    <span className="text-center text-uppercase font-monospace align-middle">AnimeBell</span>
                </a>
                <div className="d-flex">
                    <a href="/directory" className="btn btn-outline-light me-2">Directorio Anime</a>
                    <div className="input-group">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Buscar anime..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Search on Enter key
                        />
                        <button className="input-group-text btn btn-primary" id="basic-addon1" onClick={handleSearch}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopBar;
