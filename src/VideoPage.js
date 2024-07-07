import WatchVideo from './watchVideo/WatchVideo.js';
import AddComment from './comment/AddComment.js';
import CommentsList from './commentsList/CommentsList.js';
import VideoListSidebar from './videoSidebar/VideoListSidebar.js';
import { useState, useEffect } from 'react';
import './VideoPage.css';
import { useParams } from "react-router-dom";

function VideoPage({ isDarkMode, videos, setAllVideos, userInfo, setUserInfo }) {
    const { id } = useParams();
    const [key, setKey] = useState(0);
    const [videoComments, setVideoComments] = useState([]);
    const [isLoadingComments, setIsLoadingComments] = useState(true); 

    useEffect(() => {
      const fetchVideoComments = async () => {
        try {
          const response = await fetch("http://localhost:8080/api/comments/video/" + id);
          const data = await response.json();
          setVideoComments(data);
          setIsLoadingComments(false);
        } catch (error) {
          console.error("Error fetching comments:", error);
        }
      };
      fetchVideoComments();
    }, [id]);
    return (
      <div className={`container-fluid video-page ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <div className="row video-page">
          <div className="col-md-8">
            <WatchVideo key={key} isDarkMode={isDarkMode} videos={videos} setAllVideos={setAllVideos} userInfo={userInfo} setUserInfo={setUserInfo} />
            {userInfo?.username && <AddComment comments={videoComments} setVideoComments={setVideoComments} videoId={id} isDarkMode={isDarkMode} userInfo={userInfo}/>}
            <br></br>
            {!isLoadingComments && <CommentsList videoComments={videoComments} setVideoComments={setVideoComments} setVideoCommentsvideoId={id} userInfo={userInfo} setUserInfo={setUserInfo}/>}
          </div>
          <div className="col-md-4">
            <VideoListSidebar setKey={setKey} videos={videos}/>
          </div>
        </div>
      </div>
    );
}

export default VideoPage;