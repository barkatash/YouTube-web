import WatchVideo from './watchVideo/WatchVideo.js';
import AddComment from './comment/AddComment.js';
import CommentsList from './commentsList/CommentsList.js';
import VideoListSidebar from './videoSidebar/VideoListSidebar.js';
import { useState } from 'react';
import './VideoPage.css';
import { useParams } from "react-router-dom";

function VideoPage({isDarkMode, videos, setAllVideos, videoComments, setVideoComments, userInfo, setUserInfo}) {
    const { id } = useParams();
    const [key, setKey] = useState(0);
    
    return (
      <div className={`container-fluid video-page ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <div className="row video-page">
          <div className="col-md-8">
            <WatchVideo {...videos[Number(id)-1]} key={key} isDarkMode={isDarkMode} videos={videos} setAllVideos={setAllVideos} userInfo={userInfo} setUserInfo={setUserInfo}/>
            {userInfo?.username && <AddComment comments={videoComments} setVideoComments={setVideoComments} videoId={Number(id)} isDarkMode={isDarkMode}  userInfo={userInfo}/>}
            <br></br>
            <CommentsList comments={videoComments} setVideoComments={setVideoComments} videoId={Number(id)} userInfo={userInfo} setUserInfo={setUserInfo}/>
          </div>
          <div className="col-md-4">
            <VideoListSidebar setKey={setKey} videos={videos}/>
          </div>
        </div>
      </div>
    );
}

export default VideoPage;