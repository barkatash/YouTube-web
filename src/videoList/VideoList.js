
import Video from '../video/Video';
import './VideoList.css'


function VideoList( {matchedVideos} ) {

    return (
      <div className='videos'>
        { matchedVideos.map((video, id) => (
          <Video key={id} {...video}/>
        )) }
      </div>
    );
}

export default VideoList;