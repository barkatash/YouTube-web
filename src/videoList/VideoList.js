import "./VideoList.css"
import Video from '../video/Video';


function VideoList( {matchedVideos, isDarkMode} ) {

    return (
      <div className="videos">
        { matchedVideos.map((video, id) => (
          <Video key={id} {...video}/>
        )) }
      </div>
    );
}

export default VideoList;