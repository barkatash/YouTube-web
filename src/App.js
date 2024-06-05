import './App.css';
import './navbar/Navbar.js';
import Navbar from './navbar/Navbar.js';
import { useState } from 'react';
import videos from './db/videos.json';
import Homepage from './Homepage.js';
import VideoPage from './VideoPage.js';

function App() {

  const [ matchedVideos, setmatchedVideos ] = useState(videos);
  const [isDarkMode, setIsDarkMode] = useState(false);


  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar
        matchedVideos={matchedVideos}
        setmatchedVideos={setmatchedVideos}
        setIsDarkMode={setIsDarkMode}
        isDarkMode={isDarkMode}
      />
      <Homepage matchedVideos={matchedVideos} isDarkMode={isDarkMode}/>
      {/* <VideoPage isDarkMode={isDarkMode}/> */}
    </div>
  );
}

export default App;
