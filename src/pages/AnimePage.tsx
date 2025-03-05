import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const AnimePage = () => {
    const {animeSlug} = useParams<{ animeSlug: string }>();

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    interface Source {
        id: number;
        episode_id: number;
        name: string;
        quality: string;
        url: string;
        created_at: string;
        updated_at: string;
    }

    interface Episode {
        id: number;
        anime_id: number;
        number: number;
        title: string;
        created_at: string;
        updated_at: string;
        sources: Source[];
    }

    interface AnimeDetail {
        id: number;
        title: string;
        slug: string;
        description: string | null;
        image: string;
        created_at: string;
        updated_at: string;
        episodes: Episode[];
    }

    const [animeDetailFromJson, setAnimeDetailFromJson] = useState<AnimeDetail>({} as AnimeDetail);
    const [loadingAnimeDetail, setLoadingAnimeDetail] = useState(false);

    useEffect(() => {
        fetch(`${API_BASE_URL}/anime/${animeSlug}`)
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    setAnimeDetailFromJson(data);
                } else {
                    setAnimeDetailFromJson({} as AnimeDetail);  // Set empty object if data is invalid
                }
                setLoadingAnimeDetail(true);
            })
            .catch((error) => {
                console.error("Error fetching animes:", error);
                setLoadingAnimeDetail(false);
            });
    }, [API_BASE_URL, animeSlug]);

    return (
        loadingAnimeDetail ? (
            <div className="container mt-4">
                {/* Anime Title */}
                <h1 className="text-center mb-5">{animeDetailFromJson.title}</h1>

                {/* Anime Info */}
                <div className="row">
                    {/* Cover Image */}
                    <div className="ratio ratio-4x3">
                        <img src={animeDetailFromJson.image} alt={animeDetailFromJson.title}
                             className="img-fluid img-center rounded"/>
                    </div>

                    {/* Description */}
                    <div className="col-md-8 col-lg-9">
                        <p>{animeDetailFromJson.description}</p>
                    </div>
                </div>

                {/* Episode List */}
                <h3 className="mt-4">Episodes</h3>
                <ul className="list-group mb-5">
                    {animeDetailFromJson.episodes.map((episode) => (
                        <li key={episode.number} className="list-group-item">
                            <a href={`/episode/${animeSlug}/${episode.number}`} className="text-decoration-none">
                                Episode {episode.number}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        ) : (
            <div className="container mt-4">
                {/* Anime Title */}
                <h1 className="text-center mb-5"><span className="placeholder col-6"></span></h1>

                {/* Anime Info */}
                <div className="row">
                    {/* Cover Image */}
                    <div className="col-md-4 col-lg-3 text-center mb-5">
                        <div className="ratio ratio-9x16">
                            <div className="placeholder bg-secondary w-100 h-100"></div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="col-md-8 col-lg-9">
                        <p><span className="placeholder col-12"></span></p>
                    </div>
                </div>

                {/* Episode List */}
                <h3 className="mt-4"><span className="placeholder col-6"></span></h3>
                <ul className="list-group mb-5">
                    {Array.from({length: 12}, (_, i) => (
                        <li key={i + 1} className="list-group-item">
                            <span className="placeholder col-12">
                                Episode {i + 1}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    );
};

export default AnimePage;