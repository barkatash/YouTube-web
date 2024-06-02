import './App.css';
import './navbar/Navbar.js';
import Navbar from './navbar/Navbar.js';
import Sidebar from './sidebar/Sidebar.js';
import VideoList from './videoList/VideoList.js';
import { useState } from 'react';
import videos from './db/videos.json';
import CategoryNavbar from './category/CategoryNavbar.js';
import categories from "./db/categories.json"
import WatchVideo from './watchVideo/WatchVideo.js';
import AddComment from './comment/AddComment.js';

function App() {

  const [ matchedVideos, setmatchedVideos ] = useState(videos);

  return (
    <div className="App bg-light">
      <Navbar matchedVideos={matchedVideos} setmatchedVideos={setmatchedVideos}/>
      {/* <div className="container-fluid text-center">
        <div className="row">
          <div className="col-2 vh-100 bg-light"><Sidebar /></div>
          <div className="col-10">
            <CategoryNavbar categories={categories}/>
            <VideoList matchedVideos={matchedVideos}/></div>
        </div>
      </div> */}
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-7 video-page">
            <WatchVideo />
            <AddComment />
          </div>
          <div className="col-5 vh-100 bg-light">
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
