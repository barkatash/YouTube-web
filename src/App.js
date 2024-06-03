import './App.css';
import './navbar/Navbar.js';
import Navbar from './navbar/Navbar.js';
import { useState } from 'react';
import videos from './db/videos.json';
import Homepage from './Homepage.js';
import VideoPage from './VideoPage.js';

function App() {

  const [ matchedVideos, setmatchedVideos ] = useState(videos);


  return (
    <div className="App">
      <Navbar matchedVideos={matchedVideos} setmatchedVideos={setmatchedVideos}/>
      <Homepage matchedVideos={matchedVideos} />
       {/* <VideoPage /> */}
    </div>
  );
}

export default App;
