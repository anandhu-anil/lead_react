import React from "react";
import "../../assets/css/clients.css";
import sampleLogo from "../../assets/images/clients/sampleLogo.png";

const Clients = props => {
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="row">
        <div className="col-md-3 col-sm-6" style={{ padding: "10px " }}>
          <div className="client-grid">
            <div>
              <p>All of them</p>
              <p className="client-title">Clients</p>
              <p>Contact us</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6" style={{ padding: "10px " }}>
          <div className="client-grid">
            <div className="client-logo-image">
              <img alt="" className="" src={sampleLogo} />
            </div>
            <div className="client-content ">
              <p>Brand Name</p>
              <p>-----</p>
              <p>brand Name</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6" style={{ padding: "10px " }}>
          <div className="client-grid">
            <div className="client-logo-image">
              <img alt="" className="" src={sampleLogo} />
            </div>
            <div className="client-content ">
              <p>Brand Name</p>
              <p>-----</p>
              <p>brand Name</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6" style={{ padding: "10px " }}>
          <div className="client-grid">
            <div className="client-logo-image">
              <img alt="" className="" src={sampleLogo} />
            </div>
            <div className="client-content ">
              <p>Brand Name</p>
              <p>-----</p>
              <p>brand Name</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6" style={{ padding: "10px " }}>
          <div className="client-grid">
            <div className="client-logo-image">
              <img alt="" className="" src={sampleLogo} />
            </div>
            <div className="client-content ">
              <p>Brand Name</p>
              <p>-----</p>
              <p>brand Name</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6" style={{ padding: "10px " }}>
          <div className="client-grid">
            <div className="client-logo-image">
              <img alt="" className="" src={sampleLogo} />
            </div>
            <div className="client-content ">
              <p>Brand Name</p>
              <p>-----</p>
              <p>brand Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
