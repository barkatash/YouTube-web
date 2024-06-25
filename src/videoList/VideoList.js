import "./VideoList.css";
import Video from "../video/Video";

function VideoList({ matchedVideos, handleDeleteVideo, handleEditVideo, userInfo }) {
  return (
    <div className="videos">
      {matchedVideos.map((video, id) => (
        <Video
          key={id}
          {...video}
          handleDeleteVideo={handleDeleteVideo}
          handleEditVideo={handleEditVideo}
          userInfo={userInfo}
        />
      ))}
    </div>
  );
}

export default VideoList;
