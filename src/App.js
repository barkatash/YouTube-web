import "./App.css";
import "./navbar/Navbar.js";
import Navbar from "./navbar/Navbar.js";
import { useState } from "react";
import videos from "./db/videos.json";
import Homepage from "./Homepage.js";
import { Route, Routes } from "react-router-dom";
import VideoPage from "./VideoPage.js";
import UploadForm from "./uploadVideo/UploadForm.js";
import MainComponent from "./logAndSignInWindow/MainComponent.js";
import comments from "./db/comments.json";

function App() {
  const [allVideos, setAllVideos] = useState(videos);
  const [matchedVideos, setMatchedVideos] = useState(allVideos ?? videos);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [videoComments, setVideoComments] = useState(comments);

  const handleDeleteVideo = (id) => {
    const updatedVideos = allVideos.filter((video) => video.id !== id);
    setAllVideos(updatedVideos);
    setMatchedVideos(updatedVideos);
  };

  const handleEditVideo = (id, updatedVideo) => {
    const updatedVideos = allVideos.map((video) =>
      video.id === id ? updatedVideo : video
    );
    setAllVideos(updatedVideos);
    setMatchedVideos(updatedVideos);
  };

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar
                videoList={allVideos}
                setMatchedVideos={setMatchedVideos}
                setIsDarkMode={setIsDarkMode}
                isDarkMode={isDarkMode}
              />
              <Homepage
                matchedVideos={matchedVideos}
                setMatchedVideos={setMatchedVideos}
                isDarkMode={isDarkMode}
                handleDeleteVideo={handleDeleteVideo}
                handleEditVideo={handleEditVideo}
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
                setMatchedVideos={setMatchedVideos}
                setIsDarkMode={setIsDarkMode}
                isDarkMode={isDarkMode}
              />
              <VideoPage
                isDarkMode={isDarkMode}
                videos={allVideos}
                videoComments={videoComments}
                setVideoComments={setVideoComments}
                handleDeleteVideo={handleDeleteVideo}
                handleEditVideo={handleEditVideo}
              />
            </div>
          }
        />
        <Route
          path="/addVideo"
          element={<UploadForm allVideos={allVideos} setAllVideos={setAllVideos} />}
        />
        <Route path="/login" element={<MainComponent />} />
      </Routes>
    </div>
  );
}

export default App;
