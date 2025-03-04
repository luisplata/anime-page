import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const EpisodePage = () => {
    const { animeSlug, episodeNumber } = useParams();

    // Dummy video sources (Will be replaced by API data later)
    const videoSources = [
        { id: 1, url: "https://mega.nz/embed/!9OkCCCoC!S9m24BK6_XgPU7CImG_mgiIgWvsKEx4NKm-2XmOe0wk" },
        { id: 2, url: "https://another-video-source.com/embed/video2" },
        { id: 3, url: "https://yet-another-source.com/embed/video3" },
    ];

    // State to store the selected video URL
    const [selectedVideo, setSelectedVideo] = useState(videoSources[0].url);

    return (
        <div className="row mt-4">
            {/* Anime Title */}
            <h1 className="row text-center mb-5">
                <Link to={`/anime/${animeSlug}`}>
                    <h2>Watching {animeSlug} - Episode {episodeNumber}</h2>
                </Link>
            </h1>

            {/* Video Source Options */}
            <div className="row">
                <nav aria-label="Video Sources">
                    <ul className="pagination pagination-lg justify-content-center">
                        {videoSources.map((source) => (
                            <li
                                key={source.id}
                                className={`page-item ${selectedVideo === source.url ? "active" : ""}`}
                                onClick={() => setSelectedVideo(source.url)}
                                style={{ cursor: "pointer" }}
                            >
                                <span className="page-link">{source.id}</span>
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
    );
};

export default EpisodePage;
