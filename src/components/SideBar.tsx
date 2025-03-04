const SideBar = () => {
    return (
        <div className="bg-light p-3 d-none d-sm-block">
            <h4>Anime List</h4>
            <ul className="list-group">
                <li className="list-group-item">One Piece</li>
                <li className="list-group-item">Attack on Titan</li>
                <li className="list-group-item">Demon Slayer</li>
            </ul>
            <p>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                    Toggle width collapse
                </button>
            </p>
            <div style={{ minHeight: '120px' }}>
                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                    <div className="card card-body" style={{ width: '300px' }}>
                        This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
