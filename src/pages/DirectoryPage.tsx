import {useEffect, useState} from "react";
import LatestAnime from "../components/LastedAnime";

const DirectoryPage = () => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    interface Anime {
        id: number;
        title: string;
        slug: string;
        description: string | null;
        image: string;
        created_at: string;
        updated_at: string;
    }

    interface Link {
        url: string | null;
        label: string;
        active: boolean;
    }

    interface AnimeResponse {
        current_page: number;
        data: Anime[];
        first_page_url: string;
        from: number;
        last_page: number;
        last_page_url: string;
        links: Link[];
        next_page_url: string | null;
        path: string;
        per_page: number;
        prev_page_url: string | null;
        to: number;
        total: number;
    }

    const [animes, setAnimes] = useState<Anime[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        setLoading(true);
        setAnimes(Array.from({length: 20}, (_, index) => {
            return ({
                id: index,
                title: "Loading...",
                slug: `loading-${index}`,
                description: "Loading...",
                image: "",
                created_at: "",
                updated_at: ""
            });
        }));
        fetch(`${API_BASE_URL}/animes?page=${currentPage}`)
            .then((res) => res.json())
            .then((data: AnimeResponse) => {
                setAnimes(data.data);
                setTotalPages(data.last_page);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching animes:", error);
                setLoading(false);
            });
    }, [API_BASE_URL, currentPage]);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="container">
            <div className="row text-center mb-3 mt-3">
                <h2>Latest Animes</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-1">
                {animes.map((anime) => (
                    <LatestAnime key={anime.slug} title={anime.title} slug={anime.slug} imageCap={anime.image}
                                 isLoaded={!loading}/>
                ))}
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous
                        </button>
                    </li>
                    {Array.from({length: totalPages}, (_, i) => (
                        <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default DirectoryPage;