//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//> CSS
import "./site-header.scss";

//> Images
import errorIMG from "../../../assets/content/banner/error.png";
import OriharaIzayaIMG from "../../../assets/content/banner/OriharaIzaya.png";
import HeiwajimaShizuoIMG from "../../../assets/content/banner/HeiwajimaShizuo.png";
import seal13IMG from "../../../assets/content/banner/seal13.gif";

//> Data
const value = {
  banner: "EREBOS",
};

class HeaderBanner extends React.PureComponent {
  render() {
    return (
      <div class="banner">
        <div class="b bleft">
          <img id="qr" src={errorIMG} alt="error" />
        </div>
        <img id="Izaya" src={OriharaIzayaIMG} alt="OriharaIzaya" />
        <div class="titlecontainer">
          <h1>{value.banner}</h1>
        </div>
        <img id="Shizuo" src={HeiwajimaShizuoIMG} alt="HeiwajimaShizuo" />
        <div class="b bright">
          <img id="seal" src={seal13IMG} alt="seal13" />
        </div>
      </div>
    );
  }
}

export default HeaderBanner;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2018-2019 Florian Kleber
 */
