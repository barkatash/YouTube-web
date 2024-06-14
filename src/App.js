import "./App.css";
import "./navbar/Navbar.js";
import Navbar from "./navbar/Navbar.js";
import { useState } from "react";
import videos from "./db/videos.json";
import Homepage from "./Homepage.js";
import { Route, Routes } from "react-router-dom";
import VideoPage from "./VideoPage.js";
import UploadForm from "./uploadVideo/UploadForm.js"
import LogInWindow from "./logInWindow/LogInWindow.js"

function App() {
  const [allVideos, setAllVideos] = useState(videos);
  const [matchedVideos, setmatchedVideos] = useState(allVideos ?? videos);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (

    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar
                videoList={allVideos}
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
                videoList={allVideos}
                setMatchedVideos={setmatchedVideos}
                setIsDarkMode={setIsDarkMode}
                isDarkMode={isDarkMode}
              />
              <VideoPage isDarkMode={isDarkMode} videos={allVideos}/>
            </div>
          }
        />
        <Route
          path="/addVideo"
          element={
            <UploadForm allVideos={allVideos} setAllVideos={setAllVideos} />
          }
        />
        <Route
          path="/login"
          element={
            <LogInWindow />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
