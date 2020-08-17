//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBFooter, MDBRow, MDBCol, MDBContainer, MDBIcon } from "mdbreact";

//> CSS
import "./footer.scss";

class FooterGlobal extends React.Component {
  render() {
    return (
      <MDBFooter color="elegant-color" className="font-small pt-4 mt-4">
        <MDBContainer className="text-center text-md-left">
          <MDBRow>
            <div class="follows">
              <div class="followh">Follow us on:</div>
            </div>
            <MDBCol md="2">
              <div class="followt">
                Github
                <a href="#!"><MDBIcon fab icon="github" size="lg" className="cyan-text ml-2"/></a>
              </div>
              <ul>
                <li className="list-unstyled">
                <a href="https://github.com/kleberbaum">kleberbaum</a>
                </li>
                <li className="list-unstyled">
                  <a href="https://github.com/petschna">petschna</a>
                </li>
                <li className="list-unstyled">
                  <a href="https://github.com/petute">petute</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="2">
              <div class="followt">
                Github
                <a href="#!"><MDBIcon fab icon="github" size="lg" className="cyan-text ml-2"/></a>
              </div>
              <ul>
                <li className="list-unstyled">
                <a href="#!">kleberbaum</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">petschna</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">petute</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; 2018-{new Date().getFullYear()} Copyright:
            <a
              href="https://github.com/kleberbaum"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Emailwerk{" "}
            </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default FooterGlobal;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2018-2019 Florian Kleber
 */
