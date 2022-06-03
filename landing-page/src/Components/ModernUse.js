import React from "react";
import firstImage from "..//assets/desktop/image-woman-in-videocall.jpg";
import secondImage from "..//assets/desktop/image-women-videochatting.jpg";
import thirdImage from "..//assets/desktop/image-men-in-meeting.jpg";
import fourthImage from "..//assets/desktop/image-man-texting.jpg";

class ModernUse extends React.Component {
  render() {
    return (
      <section>
        {/* Image Container */}
        <picture className="img-container">
          <img src={firstImage} alt=""></img>
          <img src={secondImage} alt=""></img>
          <img src={thirdImage} alt=""></img>
          <img src={fourthImage} alt=""></img>
        </picture>

        <div>
          <h3 className="mack">Built For Modern Use</h3>
          <h2 className="secondary-header header">
            Smarter meetings, all in one place
          </h2>
          <p className="heading second-heading">
            Send messages, share files, show your screen, and record your
            meetings - all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </div>

        <div className="divider-container last-divider">
          <div className="vl"></div>
          <span className="divider">02</span>
        </div>
      </section>
    );
  }
}

export default ModernUse;
