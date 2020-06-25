import React from "react";
import "../../assets/css/topComponent.css";
import LearnMoreButton from "../Buttons/LearnMoreButton";

const TopComponent = props => {
  React.useEffect(() => {
    window.onload = function() {
      var learn = document.getElementById("learn");
      learn.style.margin = "0px";
      learn.style.transition = "1s";
      var text = document.getElementById("text");
      text.style.marginRight = "0px";
      text.style.transition = "1s";
    };
  }, []);

  return (
    <div className="top-background ">
      <div className="Top-component-heading">
        <div>
          <p id="text">Web design & build creative brands</p>
          <div className="learnmorebutton " id="learn">
            <LearnMoreButton />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopComponent;
