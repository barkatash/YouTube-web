import "./VideoList.css";
import Video from "../video/Video";

function VideoList({ matchedVideos, handleDeleteVideo, handleEditVideo }) {
  return (
    <div className="videos">
      {matchedVideos.map((video, id) => (
        <Video
          key={id}
          {...video}
          handleDeleteVideo={handleDeleteVideo}
          handleEditVideo={handleEditVideo}
        />
      ))}
    </div>
  );
}

export default VideoList;
