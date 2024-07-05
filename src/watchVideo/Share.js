import "./Share.css";
import whatsapp from "../images/whatsapp.png";
import facebook from "../images/facebook.png";
import email from "../images/email.png";
import insta from "../images/Insta.png"

function Share({ show, handleClose }) {
  return (
    <div className={`modal ${show ? "show" : ""}`} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Share</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <div>
              <img className="share-img-nav" alt="" src={whatsapp}></img>
              <p>WhatsApp</p>
            </div>
            <div>
              <img className="share-img-nav" alt="" src={facebook}></img>
              <p>Facebook</p>
            </div>
            <div className="both">
              <img className="share-img-nav" alt="" src={email}></img>
              <p>Email</p>
            </div>
            <div>
              <img className="share-img-nav" alt="" src={insta}></img>
              <p>Instagram</p>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Share;
