import React from "react";
import "../../assets/css/download.css";
import DownloadButtonImage from "../../assets/images/home/download/download-button.png";
import DownloadRightImage from "../../assets/images/home/download/download-right-image.png";

const Download = props => {
  return (
    <div>
      <div className="download-box">
        <div>
          <p className="download-heading">Get in touch</p>
          <p className="download-sub-heading">
            Feel free to contact us on your
          </p>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control download-form-style"
                placeholder="Name"
              />
            </div>
            <div className="form-group ">
              <input
                type="text"
                className="form-control download-form-style"
                placeholder="Email"
              />
            </div>
            <div className="form-group ">
              <input
                type="text"
                className="form-control download-form-style"
                placeholder="Contact no"
              />
            </div>
          </form>
          <div className="division">
            <img
              src={DownloadButtonImage}
              alt=""
              className="download-button-image-dimension"
            />
          </div>
        </div>
        <div className="division">
          <img
            src={DownloadRightImage}
            alt=""
            className="download-right-image-dimension"
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
