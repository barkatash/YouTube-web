import './App.css';
import './navbar/Navbar.js';
import Navbar from './navbar/Navbar.js';

import { useState } from 'react';
import videos from './db/videos.json';

import WatchVideo from './watchVideo/WatchVideo.js';
import AddComment from './comment/AddComment.js';
import CommentsList from './commentsList/CommentsList.js';
import VideoListSidebar from './videoSidebar/VideoListSidebar.js';
import comments from "./db/comments.json"
import Homepage from './Homepage.js';

function App() {

  const [ matchedVideos, setmatchedVideos ] = useState(videos);
  const [ video, setWatchedVideo ] = useState(videos[2]);
  const [key, setKey] = useState(0);


  return (
    <div className="App">
      <Navbar matchedVideos={matchedVideos} setmatchedVideos={setmatchedVideos}/>
      {/* <Homepage matchedVideos={matchedVideos} /> */}
      <div className="container-fluid">
      <div className="row video-page">
        <div className="col-md-8">
          <WatchVideo {...video} key={key}/>
          <AddComment />
          <CommentsList comments={comments}/>
        </div>
        <div className="col-md-4">
          <VideoListSidebar setWatchedVideo={setWatchedVideo} setKey={setKey} />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
