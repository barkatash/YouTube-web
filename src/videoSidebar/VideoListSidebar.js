import VideoSidebar from "./VideoSidebar";
import videos from "../db/videos.json";

function VideoListSidebar({setKey}) {
    return ( 
        <div>
            { videos.map((video, id) => (
                <VideoSidebar key={id} {...video} setKey={setKey}/>
            ))}
        </div>
    )
}

export default VideoListSidebar;