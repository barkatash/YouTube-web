import './Video.css'


function Video({ image, title, uploader, duration, visits, uploadDate }) {
    return (
      <div className="card card-video">
        <div className="card-body">
          <img className="video-image" src={image} alt=''></img>
          <br></br> <br></br>
          <h6 className="card-title">{title}</h6>
          <p className="card-text">{uploader} • {duration} • {visits} • {uploadDate}</p>
        </div>
      </div>
    );
}

export default Video;