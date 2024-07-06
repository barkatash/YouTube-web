import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./UserPage.css"

function UserPage() {
  const { id } = useParams();
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

  useEffect(() => {
    fetchUserVideos();
  }, [id]);
  return (
    <div className="user-page">
      <header className="user-header">
        <h1>{id}'s Videos</h1>
      </header>
      <div className="video-grid">
        {userVideos && userVideos.map((video) => (
          <div key={video._id} className="video-card">
            <div className="video-thumbnail">
              <img src={video.image} alt={video.title} />
            </div>
            <div className="video-info">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-description">{video.description}</p>
              <p className="video-views">{video.visits} views</p>
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
