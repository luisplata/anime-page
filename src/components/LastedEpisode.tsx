import {useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LatestEpisodes = ({animeTitle, animeSlug, episodeNumber, isLoaded, imageToLoad}: {
    animeTitle: string;
    animeSlug: string;
    episodeNumber: number,
    isLoaded: boolean,
    imageToLoad: string
}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        let specific = animeSlug.replace(/[^a-zA-Z0-9-]/g, '');
        specific = encodeURIComponent(specific);
        navigate(`/episode/${specific}/${episodeNumber}`);
    };

    return (
        isLoaded ? (
            <div className="col-12 mb-3">
                <div className="card" onClick={handleClick} style={{width: "19rem", cursor: "pointer"}}>
                    <div className="card bg-dark text-white border-0">
                        {/* Badge (HOY) */}
                        <div className="position-absolute top-0 start-0 m-2">
                            <span className="badge bg-primary">HOY</span>
                        </div>

                        {/* Image with Fixed Aspect Ratio */}
                        <div className="ratio ratio-4x3" style={{
                            position: "relative",
                            display: "inline-block"
                        }}>
                            <img
                                src={imageToLoad}
                                className="card-img-top"
                                alt={`Episode ${episodeNumber} of ${animeTitle}`}
                                style={{objectFit: "cover"}}
                            />
                            <div style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))"
                            }}/>
                        </div>

                        {/* Text Overlay */}
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                            <span className="badge bg-warning text-dark">Episode {episodeNumber}</span>
                            <h5 className="card-title mt-1">{animeTitle}</h5>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="col-12 mb-3">
                <div className="card" onClick={handleClick} style={{width: "19rem", cursor: "pointer"}}>
                    <div className="card bg-dark text-white border-0">
                        {/* Badge (HOY) */}
                        <div className="position-absolute top-0 start-0 m-2">
                            <span className="placeholder col-6"></span>
                        </div>

                        {/* Image with Fixed Aspect Ratio */}
                        <div className="ratio ratio-4x3">
                            <div className="placeholder bg-secondary w-100 h-100"></div>
                        </div>

                        {/* Text Overlay */}
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-7"></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default LatestEpisodes;
