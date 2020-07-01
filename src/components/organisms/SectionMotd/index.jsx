//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//> CSS
import "./motd.scss";

//> Data
const value = {
  motd: "Sky's The Limit",
};

class SectionMotd extends React.PureComponent {
  render() {
    return (
      <article class="motd">
        <section class="motd-s">
          <a href="https://www.youtube.com/watch?v=d6a4hvoY0G0" target="_blank">
            <h2>{value.motd}</h2>
          </a>
        </section>
      </article>
    );
  }
}

export default SectionMotd;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2018-2019 Florian Kleber
 */
