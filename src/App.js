import "./App.css";
import "./navbar/Navbar.js";
import Navbar from "./navbar/Navbar.js";
import { useState } from "react";
import videos from "./db/videos.json";
import Homepage from "./Homepage.js";
import { Route, Routes } from "react-router-dom";
import VideoPage from "./VideoPage.js";
import UploadForm from "./uploadVideo/UploadForm.js";

function App() {
  const [matchedVideos, setmatchedVideos] = useState(videos);
  const [allVideos, setAllVideos] = useState(videos);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar
                videoList={videos}
                setMatchedVideos={setmatchedVideos}
                setIsDarkMode={setIsDarkMode}
                isDarkMode={isDarkMode}
              />
              <Homepage
                matchedVideos={matchedVideos}
                setmatchedVideos={setmatchedVideos}
                isDarkMode={isDarkMode}
              />
            </div>
          }
        />
        <Route
          path="/watch/:id"
          element={
            <div>
              <Navbar
                videoList={videos}
                setMatchedVideos={setmatchedVideos}
                setIsDarkMode={setIsDarkMode}
                isDarkMode={isDarkMode}
              />
              <VideoPage isDarkMode={isDarkMode} />
            </div>
          }
        />
        <Route
          path="/addVideo"
          element={
            <UploadForm allVideos={allVideos} setAllVideos={setAllVideos} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
