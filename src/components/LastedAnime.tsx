import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LatestAnime = ({ title, slug, imageCap, isLoaded }: {
    title: string;
    slug: string;
    imageCap: string;
    isLoaded: boolean;
}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/anime/${slug}`);
    };

    return (
        <div className="col-12 mb-3">
            <div className="card" onClick={handleClick} style={{ width: "19rem", cursor: "pointer" }}>
                {!isLoaded ? (
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Badge (HOY) */}
                        <div className="position-absolute top-0 start-0 m-2">
                            <span className="badge bg-primary">HOY</span>
                        </div>

                        {/* Image with Fixed Aspect Ratio */}
                        <div className="ratio ratio-1x1" style={{
                            position: "relative",
                            display: "inline-block"
                        }}>
                            <img
                                src={imageCap}
                                className="card-img-top"
                                alt={title}
                                style={{ objectFit: "cover" }}
                            />
                            <div style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))"
                            }} />
                        </div>

                        {/* Text Overlay */}
                        <div className="card-img-overlay d-flex flex-column justify-content-end text-white text-shadow text-center">
                            <h5 className="card-title mt-1">{title}</h5>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default LatestAnime;
