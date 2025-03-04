import { useParams } from "react-router-dom";

const AnimePage = () => {
    const { animeSlug } = useParams<{ animeSlug: string }>();

    // Dummy data for now
    const animeData = {
        title: (animeSlug ?? "").replace("-", " ").toUpperCase(),
        description: "This is a placeholder description for the anime.",
        image: "https://placehold.co/300x450",
        episodes: [
            { number: 1 },
            { number: 2 },
            { number: 3 },
            { number: 4 },
            { number: 5 },
        ],
    };

    return (
        <div className="container mt-4">
            {/* Anime Title */}
            <h1 className="text-center mb-5">{animeData.title}</h1>

            {/* Anime Info */}
            <div className="row">
                {/* Cover Image */}
                <div className="col-md-4 text-center mb-5">
                    <img src={animeData.image} alt={animeData.title} className="img-fluid img-center rounded" />
                </div>

                {/* Description */}
                <div className="col-md-8">
                    <p>{animeData.description}</p>
                </div>
            </div>

            {/* Episode List */}
            <h3 className="mt-4">Episodes</h3>
            <ul className="list-group mb-5">
                {animeData.episodes.map((episode) => (
                    <li key={episode.number} className="list-group-item">
                        <a href={`/episode/${animeSlug}/${episode.number}`} className="text-decoration-none">
                            Episode {episode.number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AnimePage;
