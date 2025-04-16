import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

const EpisodePage = () => {
    const {animeSlug, episodeNumber} = useParams();
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

    interface EpisodeDetail {
        id: number;
        anime_id: number;
        number: number;
        title: string;
        created_at: string;
        updated_at: string;
        slug: string;
        sources: Source[];
    }


    const [episodeDetailFromJson, setEpisodeDetailFromJson] = useState<EpisodeDetail>();
    const [loadingEpisodeDetail, setLoadingEpisodeDetail] = useState(false);

    useEffect(() => {
        fetch(`${API_BASE_URL}/episodes/${animeSlug}-${episodeNumber}`, {
            headers: {
                "X-Client-UUID": localStorage.getItem('client_uuid') || '',
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    setEpisodeDetailFromJson(data);
                    setSelectedVideo(data.sources[0].url)
                    console.log(data.sources);
                } else {
                    setEpisodeDetailFromJson({} as EpisodeDetail);  // Set empty object if data is invalid
                }
                setLoadingEpisodeDetail(true);

            })
            .catch((error) => {
                console.error("Error fetching animes:", error);
                setLoadingEpisodeDetail(false);
            });
    }, [API_BASE_URL, animeSlug, episodeNumber]);

    const [selectedVideo, setSelectedVideo] = useState("URL");

    return (
        loadingEpisodeDetail && episodeDetailFromJson ? (
            <div className="row mt-4">
                {/* Anime Title */}
                <h1 className="row text-center mb-5">
                    <Link to={`/anime/${episodeDetailFromJson.slug}`}>
                        <h2>Watching {episodeDetailFromJson.title} - Episode {episodeDetailFromJson.number}</h2>
                    </Link>
                </h1>

                {/* Video Source Options */}
                <div className="row">
                    <nav aria-label="Video Sources">
                        <ul className="pagination pagination-lg justify-content-center">
                            {episodeDetailFromJson.sources.map((source) => (
                                <li
                                    key={source.id}
                                    className={`page-item ${selectedVideo === source.url ? "active" : ""}`}
                                    onClick={() => setSelectedVideo(source.url)}
                                    style={{cursor: "pointer"}}
                                >
                                    <span className="page-link">{source.name}</span>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Video Player */}
                <div className="row">
                    <div className="col-md-8 offset-md-2 text-center mb-5">
                        <iframe
                            src={selectedVideo}
                            width="100%"
                            height="550"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        ) : (
            <div className="row mt-4">
                {/* Anime Title */}
                <h1 className="row text-center mb-5">
                    <span className="placeholder col-6"></span>
                </h1>

                {/* Video Source Options */}
                <div className="row">
                    <nav aria-label="Video Sources">
                        <ul className="pagination pagination-lg justify-content-center">
                        </ul>
                    </nav>
                </div>

                {/* Video Player */}
                <div className="row">
                    <div className="col-md-8 offset-md-2 text-center mb-5">
                        <div className="ratio ratio-4x3">
                            <div className="placeholder bg-secondary w-100 h-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default EpisodePage;
