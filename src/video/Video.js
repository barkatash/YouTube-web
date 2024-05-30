import './Video.css'


function Video({ image, title, uploader, duration, visits, uploadDate }) {
    return (
      <div className="card">
        <div className="card-body">
          <img className="video-image" src={image} alt=''></img>
          <br></br> <br></br>
          <h5 className="card-title">{title}</h5>
          <p className="card-subtitle mb-2 text-body-secondary card-text">{uploader}</p>
          <p className="card-text">{duration} • {visits} • {uploadDate}</p>
        </div>
      </div>
    );
}

export default Video;