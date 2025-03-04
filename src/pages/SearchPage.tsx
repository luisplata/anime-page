import { useSearchParams } from "react-router-dom";
import LatestAnime from "../components/LastedAnime";

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";
    console.log(query);
    // Dummy anime data (Replace with API call)
    const animes = [
        { title: "One Piece", slug: "one-piece" },
        { title: "Attack on Titan", slug: "attack-on-titan" },
        { title: "Jujutsu Kaisen", slug: "jujutsu-kaisen" },
    ];

    return (
        <div className="container">
            <div className="row text-center mb-3 mt-3">
                <h2>Latest Animes</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-1">
                {animes.map((anime) => (
                    <LatestAnime key={anime.slug} title={anime.title} slug={anime.slug} />
                ))}
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default SearchPage;
