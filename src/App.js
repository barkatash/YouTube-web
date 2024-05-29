import './App.css';
import './navbar/Navbar.js';
import Navbar from './navbar/Navbar.js';
import Sidebar from './sidebar/Sidebar.js';
import VideoList from './videoList/VideoList.js';
import { useState } from 'react';
import videos from './db/videos.json';

function App() {

  const [ matchedVideos, setmatchedVideos ] = useState(videos);

  return (
    <div className="App">
      <Navbar matchedVideos={matchedVideos} setmatchedVideos={setmatchedVideos}/>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-2" vh-100>
            <Sidebar />
          </div>
          <div className="col-10">
            <VideoList matchedVideos={matchedVideos}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
