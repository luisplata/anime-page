import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import DirectoryPage from "./pages/DirectoryPage.tsx";
import AnimePage from "./pages/AnimePage.tsx";
import EpisodePage from "./pages/EpisodePage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

const App = () => {
    return (
        <Router>
            <TopBar/>
            <div className="container-fluid d-flex flex-grow-1">
                <SideBar/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                    <Route path="/directory" element={<DirectoryPage/>}/>
                    <Route path="/anime/:animeSlug" element={<AnimePage/>}/>
                    <Route path="/episode/:animeSlug/:episodeNumber" element={<EpisodePage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
