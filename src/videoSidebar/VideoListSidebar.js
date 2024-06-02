import VideoSidebar from "./VideoSidebar";
import videos from "../db/videos.json";

function VideoListSidebar({setWatchedVideo, setKey}) {
    return ( 
        <div>
            { videos.map((video, id) => (
                <VideoSidebar key={id} {...video} setWatchedVideo={setWatchedVideo} setKey={setKey}/>
            ))}
        </div>
    )
}

export default VideoListSidebar;