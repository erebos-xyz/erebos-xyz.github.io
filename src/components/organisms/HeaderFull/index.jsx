//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//> CSS
import "./site-header.scss";

//> Images
import StarEuleIMG from "../../../assets/content/full/star_eule.png";
import StarKrokoIMG from "../../../assets/content/full/star_kroko.png";

//> Data
const value = {
  full: "EREBOS",
};

class HeaderFull extends React.PureComponent {
  render() {
    return (
      <div class="full">
        <div class="f fleft">
          <img class="kroko" src={StarKrokoIMG} alt="StarKroko" />
        </div>
        <div class="titlecontainer">
          <h2>{value.full}</h2>
          <div class="titlespacer"></div>
          <h3>Sky's The Limit</h3>
        </div>
        <div class="f fright">
          <img class="eule" src={StarEuleIMG} alt="StarEule" />
        </div>
      </div>
    );
  }
}

export default HeaderFull;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2018-2019 Florian Kleber
 */
