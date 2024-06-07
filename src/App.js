import './App.css';
import './navbar/Navbar.js';
import Navbar from './navbar/Navbar.js';
import { useState } from 'react';
import videos from './db/videos.json';
import Homepage from './Homepage.js';
import VideoPage from './VideoPage.js';
import CategoryNavbar from './category/CategoryNavbar.js';
import categories from "./db/categories.json"
import WatchVideo from './watchVideo/WatchVideo.js';
import AddComment from './comment/AddComment.js';
import CommentsList from './commentsList/CommentsList.js';
import VideoListSidebar from './videoSidebar/VideoListSidebar.js';
import UploadForm from './uploadVideo/UploadForm.js';

function App() {
  const [ matchedVideos, setmatchedVideos ] = useState(videos);
  const [isDarkMode, setIsDarkMode] = useState(false);


  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar
        videoList={videos}
        setMatchedVideos={setmatchedVideos}
        setIsDarkMode={setIsDarkMode}
        isDarkMode={isDarkMode}
      />
      <Homepage matchedVideos={matchedVideos} isDarkMode={isDarkMode}/>
      {/* <VideoPage isDarkMode={isDarkMode}/> */}
    </div>
  );
}

export default App;