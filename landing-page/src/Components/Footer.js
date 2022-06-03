import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <h2 className="secondary-header footer-header">
          Experience more together
        </h2>

        <p className="footer-heading">
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>

        <button className="download-btn btn footer-btn">
          Download <span>v1.3</span>
        </button>
      </section>
    );
  }
}

export default Footer;
