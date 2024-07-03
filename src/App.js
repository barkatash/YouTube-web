import "./App.css";
import "./navbar/Navbar.js";
import Navbar from "./navbar/Navbar.js";
import { useState, useEffect } from "react";
import signInUsers from "./db/signInUsers.json";
import Homepage from "./Homepage.js";
import { Route, Routes } from "react-router-dom";
import VideoPage from "./VideoPage.js";
import UploadForm from "./uploadVideo/UploadForm.js";
import MainComponent from "./logAndSignInWindow/MainComponent.js";

function App() {
  const [allUsers, setAllUsers] = useState(signInUsers);
  const [allVideos, setAllVideos] = useState([]);


  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/videos/all");
        const data = await response.json();
        setAllVideos(data);
        setMatchedVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, []);


  const [matchedVideos, setMatchedVideos] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [userInfo, setUserInfo] = useState({
    username: "",
    displayName: "",
    password: "",
    verifyPassword: "",
    image: "",
    videoIdListLiked: [],
    videoIdListUnliked: [],
    commentIdListLiked: [],
    commentIdListUnliked: []
  });

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
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
              <Homepage
                allVideos={allVideos}
                matchedVideos={matchedVideos}
                setMatchedVideos={setMatchedVideos}
                isDarkMode={isDarkMode}
                handleDeleteVideo={handleDeleteVideo}
                handleEditVideo={handleEditVideo}
                userInfo={userInfo}
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
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
              <VideoPage
                isDarkMode={isDarkMode}
                videos={allVideos}
                setAllVideos={setAllVideos}
                handleDeleteVideo={handleDeleteVideo}
                handleEditVideo={handleEditVideo}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
            </div>
          }
        />
        <Route
          path="/addVideo"
          element={
            <UploadForm allVideos={allVideos} setAllVideos={setAllVideos} userInfo={userInfo}/>
          }
        />
        <Route
          path="/login"
          element={
            <MainComponent
              allUsers={allUsers}
              setAllUsers={setAllUsers}
              setUserInfo={setUserInfo}
              userInfo={userInfo}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
