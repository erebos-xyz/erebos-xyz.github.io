//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//> CSS
import "./site-header.scss";

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
import { ReactComponent as PurpleMountainVIMG } from "../../../assets/content/synthwave/pink_mountain.svg";
import { ReactComponent as DarkMountainVIMG } from "../../../assets/content/synthwave/pink_mountain.svg";

import SynthwaveVID from "../../../assets/content/synthwave/ezgif.com-crop.mov";

//> Data
const value = {
  full: "EREBOS",
};

class HeaderSynthwave extends React.PureComponent {
  render() {
    return (
      <div class="full">
        <div class="sky">
          <div class="titlecontainer">
            <div class="f left">
              <img class="kroko" src={StarKrokoIMG} alt="error" />
            </div>
            <h2>EREBOS</h2>
            <div class="titlespacer"></div>
            <h3>Sky's The Limit</h3>
            <div class="f right">
              <img class="eule" src={StarEuleIMG} alt="seal13" />
            </div>
            <div class="f somewhere">
              <img class="cloud1" src={Cloud1IMG} alt="cloud1" />
            </div>
            <div class="f somewhere">
              <img class="cloud2" src={Cloud2IMG} alt="cloud2" />
            </div>
          </div>
        </div>
        {/*
        <div class="f fm1">
          <img src={PinkMountainIMG} alt="PinkMountainIMG" />
        </div>
        <div class="f fm2">
          <img src={PurpleMountainIMG} alt="PurpleMountainIMG" />
        </div>
        <div class="f fm3">
          <img src={DarkMountainIMG} alt="DarkMountainIMG" />
        </div>
        */}
        <div class="f fm1">
          <PinkMountainVIMG class="fm1" />
        </div>
        <div class="f fm2">
          <PurpleMountainVIMG name="fm3" class="fm2" />
        </div>
        <div class="f fm3">
          <DarkMountainVIMG name="fm3" class="fm3" />
        </div>
        <div class="f fsynth">
          <video autoPlay muted loop id="myVideo">
            <source src={SynthwaveVID} type="video/mp4" />
          </video>
        </div>
        <div class="f flaser">
          <img src={LaserIMG} alt="seal13" />
        </div>
        <div class="f fshinobu">
          <img src={ShinobuIMG} alt="seal13" />
        </div>
      </div>
    );
  }
}

export default HeaderSynthwave;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2018-2019 Florian Kleber
 */
