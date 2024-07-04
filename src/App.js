import "./App.css";
import "./navbar/Navbar.js";
import Navbar from "./navbar/Navbar.js";
import { useState, useEffect } from "react";
import Homepage from "./Homepage.js";
import { Route, Routes } from "react-router-dom";
import VideoPage from "./VideoPage.js";
import UploadForm from "./uploadVideo/UploadForm.js";
import MainComponent from "./logAndSignInWindow/MainComponent.js";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const [matchedVideos, setMatchedVideos] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/users/");
        const data = await response.json();
        setAllUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

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

  const [userInfo, setUserInfo] = useState({
    username: "",
    displayName: "",
    password: "",
    verifyPassword: "",
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

  const handleEditVideo = async (id, updatedVideoData) => {
    try {
      const token = userInfo.token;
      const response = await fetch(
        `http://localhost:8080/api/users/${userInfo.username}/videos/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify(updatedVideoData),
        }
      );
      const json = await response.json();
      if (json.errors) {
        alert("You are not authorized to edit this video.");
        return;
      }
      const updatedVideo = json;
      const updatedVideos = allVideos.map((video) =>
        video._id === id ? updatedVideo : video
      );
      setAllVideos(updatedVideos);
      setMatchedVideos(updatedVideos);
    } catch (error) {
      console.error("Error edit video:", error);
      alert("An error occurred while editing the video.");
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
                allUsers={allUsers}
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
            />
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
