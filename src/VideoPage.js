import WatchVideo from './watchVideo/WatchVideo.js';
import AddComment from './comment/AddComment.js';
import CommentsList from './commentsList/CommentsList.js';
import VideoListSidebar from './videoSidebar/VideoListSidebar.js';
import { useState, useEffect } from 'react';
import './VideoPage.css';
import { useParams } from "react-router-dom";

function VideoPage({isDarkMode, videos, setAllVideos, userInfo, setUserInfo, allUsers}) {
    const { id } = useParams();
    const [key, setKey] = useState(0);
    const [videoComments, setVideoComments] = useState([]);
    useEffect(() => {
      const fetchVideoComments = async () => {
        try {
          const response = await fetch("http://localhost:8080/api/comments/video/" + id);
          const data = await response.json();
          setVideoComments(data);
        } catch (error) {
          console.error("Error fetching videos:", error);
        }
      };
      fetchVideoComments();
    }, [id]);
    return (
      <div className={`container-fluid video-page ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <div className="row video-page">
          <div className="col-md-8">
            <WatchVideo {...videos[Number(id)-1]} key={key} isDarkMode={isDarkMode} videos={videos} setAllVideos={setAllVideos} userInfo={userInfo} setUserInfo={setUserInfo}/>
            {userInfo?.username && <AddComment comments={videoComments} setVideoComments={setVideoComments} videoId={Number(id)} isDarkMode={isDarkMode} userInfo={userInfo} allUsers={allUsers}/>}
            <br></br>
            <CommentsList videoComments={videoComments} setVideoComments={setVideoComments} setVideoCommentsvideoId={Number(id)} userInfo={userInfo} setUserInfo={setUserInfo} allUsers={allUsers}/>
          </div>
          <div className="col-md-4">
            <VideoListSidebar setKey={setKey} videos={videos}/>
          </div>
        </div>
      </div>
    );
}

export default VideoPage;