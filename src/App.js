import "./App.css";
import "./navbar/Navbar.js";
import Navbar from "./navbar/Navbar.js";
import { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage.js";
import Homepage from "./Homepage.js";
import { Route, Routes } from "react-router-dom";
import VideoPage from "./VideoPage.js";
import UploadForm from "./uploadVideo/UploadForm.js";
import MainComponent from "./logAndSignInWindow/MainComponent.js";
import UserPage from "./userPage/UserPage.js";
import Sidebar from "./sidebar/Sidebar.js";

function App() {
  const [allVideos, setAllVideos] = useState([]);
  const [matchedVideos, setMatchedVideos] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/videos");
        const data = await response.json();
        setAllVideos(data);
        setMatchedVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, []);
  const rerenderVideos = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/videos/all");
      const data = await response.json();
      setAllVideos(data);
      setMatchedVideos(data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const [userInfo, setUserInfo] = useLocalStorage("userInfo", {
    username: "",
    displayName: "",
    image: "",
    videoIdListLiked: [],
    videoIdListUnliked: [],
    commentIdListLiked: [],
    commentIdListUnliked: [],
    token: "",
  });

  const handleDeleteVideo = async (id) => {
    try {
      const token = userInfo.token;
      const response = await fetch(
        `http://localhost:8080/api/users/${userInfo.username}/videos/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      const json = await response.json();
      if (json.errors) {
        alert("You are not authorized to delete this video.");
        return;
      }
      setAllVideos(allVideos.filter((video) => video._id !== id));
      setMatchedVideos(matchedVideos.filter((video) => video._id !== id));
    } catch (error) {
      console.error("Error deleting video:", error);
      alert("An error occurred while deleting the video.");
    }
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
                matchedVideos={matchedVideos}
                setMatchedVideos={setMatchedVideos}
                isDarkMode={isDarkMode}
                handleDeleteVideo={handleDeleteVideo}
                userInfo={userInfo}
                allVideos={allVideos}
                setAllVideos={setAllVideos}
                rerenderVideos={rerenderVideos}
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
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
            </div>
          }
        />
        <Route
          path="/addVideo"
          element={
            <UploadForm
              allVideos={allVideos}
              setAllVideos={setAllVideos}
              userInfo={userInfo}
              rerenderVideos={rerenderVideos}
            />
          }
        />
        <Route
          path="/login"
          element={
            <MainComponent setUserInfo={setUserInfo} userInfo={userInfo} />
          }
        />
        <Route
          path={"/:id"}
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
              <div className="row">
                <div className="col-md-2">
                  <Sidebar isDarkMode={isDarkMode} />
                </div>
                <div className="col-md-10">
                  <UserPage />
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
