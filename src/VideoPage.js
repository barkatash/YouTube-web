import videos from './db/videos.json';
import WatchVideo from './watchVideo/WatchVideo.js';
import AddComment from './comment/AddComment.js';
import CommentsList from './commentsList/CommentsList.js';
import VideoListSidebar from './videoSidebar/VideoListSidebar.js';
import comments from "./db/comments.json";
import { useState } from 'react';
import './VideoPage.css';
import { useParams } from "react-router-dom";

function VideoPage({isDarkMode}) {
    const { id } = useParams();
    const[videoComments, setVideoComments] = useState(comments);
    
    return (
      <div className={`container-fluid video-page ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <div className="row video-page">
          <div className="col-md-8">
            <WatchVideo {...videos[id-1]}  isDarkMode={isDarkMode}/>
            <AddComment comments={videoComments} setVideoComments={setVideoComments} videoId={id} isDarkMode={isDarkMode}/>
            <br></br>
            <CommentsList comments={videoComments} videoId={Number(id)}/>
          </div>
          <div className="col-md-4">
            <VideoListSidebar/>
          </div>
        </div>
      </div>
    );
}

export default VideoPage;