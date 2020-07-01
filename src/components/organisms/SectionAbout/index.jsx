//> React
// Contains all the functionality necessary to define React components
import React, { Fragment } from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBBox,
  MDBView,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBAnimation,
  MDBInput,
} from "mdbreact";

//> CSS
import "./about.scss";

//> Data
const value = {
  about_pages: [
    {
      content: {
        boxes: [
          {
            box_type: "title",
            value: "WORLD Premiere",
          },
          {
            box_type: "content",
            value: (
              <MDBBox class="rich-text">
                <MDBBox tag="p"></MDBBox>
                <div class="inline-titel">Kirito is dead ?!?</div>
                <MDBBox tag="p">
                Just before arriving, he noticed that they were being followed, and faced the stalker, 
                Kanamoto Atsushi. He defended Asuna, but was injected with Succinylcholine and was later taken in an ambulance. 
                He suffered severe brain damage and died cause of BUTTERFLY.
                  <br />
                </MDBBox>
              </MDBBox>
            ),
          },
          {
            box_type: "content",
            value: (
              <MDBBox class="rich-text">
                <MDBBox tag="p"></MDBBox>
                <div class="inline-titel">More BUTTERFLIES in Anime?</div>
                <MDBBox tag="p">
                  Aizen in Bleach, the rapist in SAO, Kaguya in Naruto now who will be next you ask? It indicates massive
                  outbreaks where sighted in Kimetsu no Yaiba, the new Shonen for Twilight fans.
                  <br />
                </MDBBox>
              </MDBBox>
            ),
          },
          {
            box_type: "content",
            value: (
              <MDBBox class="rich-text">
                <MDBBox tag="p"></MDBBox>
                <div class="inline-titel">No Game no Life season 2 confirmed ?!?</div>
                <MDBBox tag="p">
                  Will be released after One Piece finishes Anime. LOL. Some people may say that there will be one, weird I think so too.
                  <br />
                </MDBBox>
              </MDBBox>
            ),
          },
        ],
      },
      triangulum: {
        use_image: false,
        blink: "Hey Ho",
      },
    },
  ],
};

class AboutPage extends React.PureComponent {
  render() {
    console.log(value);
    return (
      <article class="about">
        {value.about_pages.map((page, i) => {
            return (
              <>
              <input type="radio" name="radioabout" id={"about-"+i}></input>
              <MDBBox tag="section" class={"about-s about-"+i}>
                <MDBBox class="boxes">
                {page.content.boxes.map((box, i) => {
                  return (
                  <MDBBox>
                    {box.box_type == 'title' ?
                    (
                      <MDBBox class="box-title">
                          <div class="box-header">{ box.value }</div>
                      </MDBBox>
                    ) : (
                      <MDBBox class="box">
                          {box.value}
                      </MDBBox>
                    )
                }
                  </MDBBox>
                  );
                })}
                </MDBBox>

                <MDBBox class="triangulum">
                  {page.triangulum.use_image ?(
                    <img class="oculus-pic" alt="erebos-network"></img>
                  ) : (
                    <MDBBox  class="oculus">
                      <label for={"about-"+
                      i == 1 ?(
                          value.about_pages
                        ) : (
                          i-1
                        )
                      }
                      class="oculus-nav prev">
                        <img src="https://erebos.xyz/PIC/it.png" alt="<"></img>
                      </label>

                      <blink class="oculus-blink">{page.triangulum.blink}</blink>

                      <label for={"about-"+
                      i == 1 ?(
                          value.about_pages
                        ) : (
                          i+1
                        )
                      }
                       class="oculus-nav next">
                        <img src="https://erebos.xyz/PIC/it.png" alt=">"></img>
                      </label>

                      <MDBBox class="oculus-nav-dots">
                      {value.about_pages.map((page, i) => {
                        return (
                          <>
                          <label for={"about-"+i} class="oculus-nav-dot" id={"about-dot-"+i}></label>
                          </>
                          );
                        })}
                      </MDBBox>
                    </MDBBox>
                  )}
                </MDBBox>
              </MDBBox>
              </>
              );
            })}  
      </article>
    );
  }
}

export default AboutPage;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2018-2019 Florian Kleber
 */
