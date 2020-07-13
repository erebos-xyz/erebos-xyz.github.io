//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//> CSS
import "./spaceship.scss";

//> Images
import Spaceship1IMG from "../../../assets/content/spaceship/spaceship1.png";

//> Data
const value = {
  motd: "Sky's The Limit",
};

class SectionSpaceship extends React.PureComponent {
  render() {
    return (
      <article class="spaceship">
        <section class="spaceship-s">
          <div>
            <img src={Spaceship1IMG} alt="spaceship1" />
          </div>
        </section>
      </article>
    );
  }
}

export default SectionSpaceship;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2018-2019 Florian Kleber
 */
