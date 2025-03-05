import LatestAnime from "../components/LastedAnime";
import LatestEpisodes from "../components/LastedEpisode";
import {useEffect, useState} from "react";

const HomePage = () => {

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    /*
    {
            "id": 1,
            "title": "One Piece",
            "slug": "one-piece",
            "description": "A story about pirates.",
            "image": "https://www3.animeflv.net/uploads/animes/covers/4130.jpg",
            "created_at": null,
            "updated_at": null
        }
    */
    interface Anime {
        id: number;
        title: string;
        slug: string;
        description: string;
        image: string;
    }

    const [animes, setAnimes] = useState<Anime[]>([]);
    const [loadingAnime, setLoadingAnime] = useState(false);


    useEffect(() => {
        setAnimes(Array.from({length: 21}, (_, index) => ({
            id: index,
            title: "Loading...",
            slug: `loading-${index}`,
            description: "Loading...",
            image: ""
        })));
        fetch(`${API_BASE_URL}/animes`)
            .then((res) => res.json())
            .then((data) => {
                if (data?.data) {
                    setAnimes(data.data);
                } else {
                    setAnimes([]);  // Set empty array if data is invalid
                }
                setLoadingAnime(true);
            })
            .catch((error) => {
                console.error("Error fetching animes:", error);
                setLoadingAnime(false);
            });
    }, []);


    /*
        {
                "id": 2,
                "number": 2,
                "anime": {
                    "id": 1,
                    "slug": "one-piece",
                    "title": "One Piece",
                    "image": "https://www3.animeflv.net/uploads/animes/covers/4130.jpg"
                },
                "created_at": "2025-03-04T03:16:17.000000Z"
            }
        */

    interface Episode {
        id: number;
        number: number;
        anime: {
            id: number;
            slug: string;
            title: string;
            image: string;
        };
        isLoaded: boolean;
    }

    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [loadingEpisode, setLoadingEpisode] = useState(false);

    useEffect(() => {
        // console.log("Episodes updated:", episodes);
    }, [episodes]);

    useEffect(() => {
        // Crear placeholders ANTES de la petición
        setEpisodes(Array.from({length: 21}, (_, index) => ({
            id: index,
            number: 0,
            anime: {id: 0, slug: `loading-${index}`, title: "Loading...", image: ""},
            isLoaded: false
        })));

        fetch(`${API_BASE_URL}/episodes`)
            .then((res) => res.json())
            .then((data) => {
                if (data && data.data) {
                    setEpisodes(structuredClone(data.data.map((episode: Episode) => ({
                        ...episode,
                        isLoaded: true
                    }))));
                } else {
                    setEpisodes([]);  // Si hay error, limpiar episodios
                }
                setLoadingEpisode(true);
            })
            .catch((error) => {
                console.error("Error fetching episodes:", error);
                setLoadingEpisode(false);
            });
    }, []);

    useEffect(() => {
        //console.log("loadingEpisode changed:", loadingEpisode);
    }, [loadingEpisode]);


    //if (loadingAnime && loadingEpisode) return <p className="text-center">Loading...</p>;


    return (
        <div className="container mt-3 mb-5">
            <div className="d-block d-sm-none">
                <nav>
                    <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                aria-selected="true">Episodes
                        </button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                                aria-selected="false">Animes
                        </button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                         aria-labelledby="nav-home-tab" tabIndex={0}>
                        <div className="row">
                            <div className="row text-center mt-3">
                                <h2>Latest Episodes</h2>
                            </div>
                            <div className="row-cols-1 row-cols-md-4 g-4">
                                {
                                    episodes.map((episode) => (
                                        <LatestEpisodes
                                            key={`${episode.id}`}
                                            animeTitle={episode.anime.title}
                                            animeSlug={episode.anime.slug}
                                            episodeNumber={episode.number}
                                            isLoaded={episode.isLoaded}
                                            imageToLoad={episode.anime.image}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"
                         tabIndex={0}>
                        <div className="row">
                            <div className="row text-center mt-3">
                                <h2>Latest Animes</h2>
                            </div>
                            <div className="row row-cols-1 row-cols-md-4 g-4">
                                {animes.map((anime) => (
                                    <LatestAnime key={anime.slug} title={anime.title} slug={anime.slug}
                                                 imageCap={anime.image} isLoaded={loadingAnime}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-none d-sm-block">
                <div className="col-12 text-center">
                    <h2>Latest Episodes</h2>
                </div>
                <div className="col-12">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-4">
                            {
                                episodes.map((episode) => (
                                    <LatestEpisodes
                                        key={`${episode.anime.slug}-${episode.number}`}
                                        animeTitle={episode.anime.title}
                                        animeSlug={episode.anime.slug}
                                        episodeNumber={episode.number}
                                        isLoaded={loadingEpisode}
                                        imageToLoad={episode.anime.image}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-4">
                            {animes.map((anime) => (
                                <LatestAnime key={anime.slug} title={anime.title} slug={anime.slug}
                                             imageCap={anime.image} isLoaded={loadingAnime}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
