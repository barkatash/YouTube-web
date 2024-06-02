import './VideoSidebar.css'
function VideoSidebar( { image, title, uploader, visits, duration, uploadDate } ) {
    return (
        <div className="container mt-3">
            <div className="d-flex align-items-center">
                <img src={image} className="img-fluid" alt="Image Description" style={{ maxWidth: '30%' }} />
                <div className="ml-3">
                <p className="card-title mb-0">{title}</p>
                <p className="card-text text-muted">{uploader}</p>
                <p className="card-text">
                    <small className="text-muted">
                    {visits} • {uploadDate}
                    </small>
                </p>
                </div>
            </div>
            </div>
    );
}
export default VideoSidebar;