import VideoSidebar from "./VideoSidebar";
import videos from "../db/videos.json";

function VideoListSidebar() {
    return ( 
        <div>
            { videos.map((video, id) => (
                <VideoSidebar key={id} {...video} />
            ))}
        </div>
    )
}

export default VideoListSidebar;