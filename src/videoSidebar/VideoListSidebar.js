import VideoSidebar from "./VideoSidebar";


function VideoListSidebar({setKey, videos}) {
    return ( 
        <div>
            { videos.map((video, id) => (
                <VideoSidebar key={id} {...video} setKey={setKey}/>
            ))}
        </div>
    )
}

export default VideoListSidebar;