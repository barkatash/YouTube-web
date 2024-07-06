import "./VideoList.css";
import Video from "../video/Video";

function VideoList({ matchedVideos, handleDeleteVideo, userInfo, setAllVideos, allVideos }) {

  return (
    <div className="videos">
      {matchedVideos.map((video, id) => (
        <Video
          key={id}
          {...video}
          handleDeleteVideo={handleDeleteVideo}
          userInfo={userInfo}
          setAllVideos={setAllVideos}
          allVideos={allVideos}
        />
      ))}
    </div>
  );
}

export default VideoList;
