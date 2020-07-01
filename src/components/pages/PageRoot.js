//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBFreeBird, MDBCol, MDBRow, MDBCardBody, MDBIcon } from "mdbreact";

//> Components

/**
 * SectionContainer: SectionContainer Molecule
 */
import { SectionContainer } from "../molecules";

import {
  AboutPage,
} from "../organisms";

//> Images
// Logo of React
import ReactLogo from "../../assets/content/React-icon.svg";

class PageRoot extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  render() {
    return (
      <>
        <AboutPage/>
        <SectionContainer noBorder noBottom>
          <MDBFreeBird className="mt-3 mb-5">
            <MDBRow>
              <MDBCol
                md="10"
                className="mx-auto float-none white z-depth-1 py-2 px-2"
              >
                <MDBCardBody className="text-center">
                  <h2 className="h2-responsive mb-4">
                    <strong className="font-weight-bold">
                      <img src={ReactLogo} alt="logo" className="pr-2" />
                    </strong>
                  </h2>
                  <MDBRow />
                  <p>React Bootstrap with Material Design</p>
                  <p className="pb-4">
                    This application shows the actual use of MDB React
                    components in the application.
                  </p>
                  <MDBRow className="d-flex flex-row justify-content-center row">
                    <a
                      className="border nav-link border-light rounded mr-1"
                      href="https://mdbootstrap.com/react/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MDBIcon icon="graduation-cap" className="mr-2" />
                      <span className="font-weight-bold">
                        Official Documentation
                      </span>
                    </a>
                  </MDBRow>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
        </SectionContainer>
      </>
    );
  }
}

export default PageRoot;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2018-2019 Florian Kleber
 */
