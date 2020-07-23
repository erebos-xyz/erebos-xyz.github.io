//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> Additional modules
// Parallax
import { Parallax } from "react-scroll-parallax";
// Scroll
import { Link } from "react-scroll";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBView,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBAnimation,
} from "mdbreact";

//> Images
// Logo of Blue Lupi (white)
import lupiLogoWhite from "../../../assets/content/synthwave/keinbock.png";
// Coffee center image
import coffeeMug from "../../../assets/content/synthwave/star_eule.png";
// Placeholder image
//import placeholderImage from "../../../assets/content/bg/white.jpg";

//> Images
import StarEuleIMG from "../../../assets/content/synthwave/star_eule.png";
import StarKrokoIMG from "../../../assets/content/synthwave/star_kroko.png";
import LaserIMG from "../../../assets/content/synthwave/flaser.png";
import Cloud1IMG from "../../../assets/content/synthwave/cloud1.png";
import Cloud2IMG from "../../../assets/content/synthwave/cloud2.png";
import PinkMountainIMG from "../../../assets/content/synthwave/pink_mountain.png";
import PurpleMountainIMG from "../../../assets/content/synthwave/purple_mountain.png";
import DarkMountainIMG from "../../../assets/content/synthwave/dark_mountain.png";
import ShinobuIMG from "../../../assets/content/synthwave/shinobu.png";

import { ReactComponent as PinkMountainVIMG } from "../../../assets/content/synthwave/pink_mountain.svg";
import { ReactComponent as PurpleMountainVIMG } from "../../../assets/content/synthwave/purple_mountain.svg";
import { ReactComponent as DarkMountainVIMG } from "../../../assets/content/synthwave/dark_mountain.svg";

import SynthwaveVID from "../../../assets/content/synthwave/synthwave.mov";

import "./site-header.scss";

class HeaderSynthwave extends React.Component {
  render() {
    const { data } = this.props;
    let loaded = false;

    return (
      <div id="full">
        <MDBAnimation type="fadeIn" duration="500ms" delay="450ms">
          <Parallax
            className="overlay custom-class"
            y={[-40, -20]}
            tagOuter="figure"
          >
            <img class="kroko" src={StarKrokoIMG} alt="error" />
          </Parallax>
        </MDBAnimation>
        <MDBAnimation type="fadeIn" duration="500ms" delay="450ms">
          <Parallax className="overlay custom-class" tagOuter="figure">
            <div className="titlecontainer">
              <h2>EREBOS</h2>
              <div class="titlespacer"></div>
              <h3>Sky's The Limit</h3>
            </div>
          </Parallax>
        </MDBAnimation>
        <MDBAnimation type="fadeIn" duration="500ms" delay="450ms">
          <Parallax
            className="overlay custom-class"
            y={[-40, 20]}
            tagOuter="figure"
          >
            <img class="eule" src={StarEuleIMG} alt="seal13" />
          </Parallax>
        </MDBAnimation>
        <div
          style={{ overflow: "hidden" }}
          className="f overlay justify-content-center align-items-center d-none d-lg-flex"
        >
          <Parallax
            className="overlay synthwave custom-class"
            y={[-40, 70]}
            tagOuter="figure"
          >
            <MDBAnimation type="fadeInUp" duration="500ms" delay="450ms">
              <PinkMountainVIMG class="fm1" />
              <img class="fm1" src={PinkMountainIMG} alt="PinkMountainIMG" />
            </MDBAnimation>
          </Parallax>
          <Parallax
            className="overlay synthwave custom-class"
            y={[-40, 70]}
            tagOuter="figure"
          >
            <MDBAnimation type="fadeInUp" duration="500ms" delay="650ms">
              <PurpleMountainVIMG class="fm2" />
              <img
                class="fm2"
                src={PurpleMountainIMG}
                alt="PurpleMountainIMG"
              />
            </MDBAnimation>
          </Parallax>
          <Parallax
            className="overlay synthwave custom-class"
            y={[-40, 80]}
            tagOuter="figure"
          >
            <MDBAnimation type="fadeInUp" duration="500ms" delay="850ms">
              <DarkMountainVIMG class="fm3" />
              <img class="fm3" src={DarkMountainIMG} alt="DarkMountainIMG" />
            </MDBAnimation>
          </Parallax>
          <Parallax
            className="overlay synthwave custom-class"
            y={[-40, 80]}
            tagOuter="figure"
          >
            <img class="flaser" src={LaserIMG} alt="DarkMountainIMG" />
          </Parallax>
          <Parallax
            className="overlay synthwave custom-class"
            y={[-40, 80]}
            tagOuter="figure"
          >
            <video autoPlay muted loop className="fsynth">
              <source src={SynthwaveVID} type="video/mp4" />
            </video>
          </Parallax>
          <Parallax
            className="overlay synthwave custom-class"
            y={[-10, -10]}
            tagOuter="figure"
          >
            <img width="1920px" src={ShinobuIMG} alt="DarkMountainIMG" />
          </Parallax>
        </div>
      </div>
    );
  }
}

export default HeaderSynthwave;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
