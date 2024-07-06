import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./UserPage.css"
import { useNavigate } from "react-router-dom";
import { daysAgo } from "../video/utils";

function UserPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userVideos, setUserVideos] = useState([]);

  const fetchUserVideos = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/${id}/videos`);
      const data = await response.json();
      setUserVideos(data);
    } catch (error) {
      console.error("Error fetching user videos:", error);
    }
  };
  const onMoveToVideo = (id) => {
    navigate(`/watch/${id}`);
  };

  useEffect(() => {
    fetchUserVideos();
  }, [id]);
  return (
    <div className="user-page">
      <header className="user-header">
        <h1>{id}</h1>
      </header>
      <hr></hr>
      <h5 className='for-you-videos'>For You</h5>
      <br></br>
      <div className="video-grid">
        {userVideos && userVideos.map((video) => (
          <div key={video._id} className="video-card">
            <div className="position-relative">
              <img src={`http://localhost:8080/${video.image}`} className="video-user-image" alt={video.title} onClick={() => onMoveToVideo(video._id)}/>
              <span className="duration-user-video">{video.duration}</span>
            </div>
            <div className="video-info">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-views">{video.visits} views • {daysAgo(video.uploadDate)}</p>
              <p className="video-duration">{video.duration}</p>
            </div>
          </div>
        ))}
        {!userVideos && (<p>No videos found</p>)}
      </div>
    </div>
  );
}

export default UserPage;
