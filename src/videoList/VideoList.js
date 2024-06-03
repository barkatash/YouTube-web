import "./VideoList.css"
import Video from '../video/Video';


function VideoList( {matchedVideos} ) {

    return (
      <div className="videos">
        { matchedVideos.map((video, id) => (
          <Video key={id} {...video}/>
        )) }
      </div>
    );
}

export default VideoList;