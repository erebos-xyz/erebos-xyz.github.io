//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBBox } from "mdbreact";

//> CSS
import "./motd.scss";

//> Video
import SynthwaveVID from "../../../assets/content/synthwave/ezgif.com-crop.mov";

//> Data
const value = {
  motd: "Sky's The Limit",
  //motd: "",
};

class SectionMotd extends React.PureComponent {
  render() {
    return (
      <article class="motd">
        <section class="motd-s">
          <a href="https://www.youtube.com/watch?v=d6a4hvoY0G0" target="_blank">
            <div class="motdh">{value.motd}</div>
          </a>
        </section>
        
        <video autoPlay muted loop className="fsynthtop">
          <source src={SynthwaveVID} type="video/mp4" />
        </video>

        <video autoPlay muted loop className="fsynthbot">
          <source src={SynthwaveVID} type="video/mp4" />
        </video>
      </article>
    );
  }
}

export default SectionMotd;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2018-2019 Florian Kleber
 */
