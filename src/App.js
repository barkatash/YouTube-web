import "./App.css";
import "./navbar/Navbar.js";
import Navbar from "./navbar/Navbar.js";
import { useState } from "react";
import videos from "./db/videos.json";
import Homepage from "./Homepage.js";
import { Route, Routes } from "react-router-dom";
import VideoPage from "./VideoPage.js";

function App() {
  const [matchedVideos, setmatchedVideos] = useState(videos);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (

      <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <Navbar
          videoList={videos}
          setMatchedVideos={setmatchedVideos}
          setIsDarkMode={setIsDarkMode}
          isDarkMode={isDarkMode}
        />
        <Routes>
          <Route path="/" element={<Homepage matchedVideos={matchedVideos} setmatchedVideos={setmatchedVideos} isDarkMode={isDarkMode} />} />
          <Route path="/watch/:id" element={<VideoPage isDarkMode={isDarkMode}/>} />
        </Routes>
      </div>
  );
}

export default App;
