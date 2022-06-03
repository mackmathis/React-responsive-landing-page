import React from "react";
import mobileHero from "../assets/tablet/image-hero.png";
import tabletHero from "../assets/tablet/image-hero.png";
import desktopHeroLeft from "../assets/desktop/image-hero-left.png";
import desktopHeroRight from "../assets/desktop/image-hero-right.png";

class Hero extends React.Component {
  render() {
    return (
      <div>
        <picture>
          <img className="hero hero-mobile" alt="" src={mobileHero}></img>

          <img className="hero hero-tablet" alt="" src={tabletHero}></img>

          <img
            className="hero hero-desktop left"
            alt=""
            src={desktopHeroLeft}
          ></img>

          <img
            className="hero hero-desktop right"
            alt=""
            src={desktopHeroRight}
          ></img>
        </picture>

        <section>
          <h1 className="main-header header">
            Group Chat <br /> for Everyone
          </h1>
          <p className="heading">
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>

          <div className="button-container">
            <button className="btn download-btn">
              Download <span>v1.3</span>
            </button>

            <button className="btn secondary-btn">What Is It?</button>
          </div>

          <div className="divider-container">
            <div className="vl"></div>
            <span className="divider">01</span>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
