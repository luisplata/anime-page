import LatestAnime from "./LastedAnime";
import LatestEpisodes from "./LastedEpisode";

const MainContent = () => {
    const animes = [
        { title: "One Piece", slug: "one-piece" },
        { title: "Attack on Titan", slug: "attack-on-titan" },
        { title: "Jujutsu Kaisen", slug: "jujutsu-kaisen" },
    ];

    const episodes = [
        { animeTitle: "One Piece", animeSlug: "one-piece", episodeNumber: 1000 },
        { animeTitle: "Attack on Titan", animeSlug: "attack-on-titan", episodeNumber: 75 },
        { animeTitle: "Jujutsu Kaisen", animeSlug: "jujutsu-kaisen", episodeNumber: 24 },
    ];
    return (
        <div className="container mt-3">
            <div className="d-block d-sm-none">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Episodes</button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Animes</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
                        <div className="row">
                            <div className="row text-center mt-3">
                                <h2>Latest Episodes</h2>
                            </div>
                            <div className="row-cols-1 row-cols-md-4 g-4">
                                {episodes.map((episode) => (
                                    <LatestEpisodes
                                        key={`${episode.animeSlug}-${episode.episodeNumber}`}
                                        animeTitle={episode.animeTitle}
                                        animeSlug={episode.animeSlug}
                                        episodeNumber={episode.episodeNumber}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex={0}>
                        <div className="row">
                            <div className="row text-center mt-3">
                                <h2>Latest Animes</h2>
                            </div>
                            <div className="row-cols-1 row-cols-md-4 g-4">
                                {animes.map((anime) => (
                                    <LatestAnime key={anime.slug} title={anime.title} slug={anime.slug} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-none d-sm-block">
                <div className="row">
                    <div className="row text-center">
                        <h2>Latest Episodes</h2>
                    </div>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {episodes.map((episode) => (
                            <LatestEpisodes
                                key={`${episode.animeSlug}-${episode.episodeNumber}`}
                                animeTitle={episode.animeTitle}
                                animeSlug={episode.animeSlug}
                                episodeNumber={episode.episodeNumber}
                            />
                        ))}
                    </div>
                </div>
                <div className="row">
                    <div className="row text-center">
                        <h2>Latest Animes</h2>
                    </div>
                    <div className="row-cols-1 row-cols-md-4 g-4">
                        {animes.map((anime) => (
                            <LatestAnime key={anime.slug} title={anime.title} slug={anime.slug} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
