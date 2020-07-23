//> React
// Contains all the functionality necessary to define React components
import React, { Fragment } from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBCard, MDBCardImage, MDBBtn, MDBIcon, MDBCardBody, MDBCardText, MDBContainer, MDBRow, MDBCol, MDBBox, MDBTypography } from "mdbreact";

//> CSS
import "./sharingan.scss";

//> Images
import Mitsudomoe1IMG from "../../../assets/content/sharingan/mitsudomoe1.png";
import Mitsudomoe2IMG from "../../../assets/content/sharingan/mitsudomoe2.png";
import Mitsudomoe3IMG from "../../../assets/content/sharingan/mitsudomoe3.png";
import SuppiIMG from "../../../assets/content/team/suppi.jpg";
import KamiIMG from "../../../assets/content/team/kami.jpg";
import TokoIMG from "../../../assets/content/team/toko.jpg";
import ChrisIMG from "../../../assets/content/team/chris.jpg";
import SaharaIMG from "../../../assets/content/team/sahara.jpg";
import sculpture1 from "../../../assets/content/sharingan/whiteglasses.png";
import sculpture2 from "../../../assets/content/sharingan/darkglasses.png";

//> Data
const value = {
  sharingan: {
    show_projects: true,
    sharingan_1: (
      <MDBBox class="rich-text">
        <p></p>
        <div class="s-header">Ts3.Party</div>
        <MDBBox tag="p">
          Our Teamspeak is divided into East, West-Europe, and USA. So that
          everyone in Europe and some people from USA can fully enjoy our
          Teamspeak environment. The TS environment includes various special
          commands, ranks and some special shit what will come soon.
        </MDBBox>
        <MDBBox tag="p">
          The word of a Kami or a Butterfly is a law and must not fade out into
          oblivion. Kami is the owner rank of the TS and butterfly is our
          Subadmin, this people won't be malicious persons.
        </MDBBox>
        <MDBBox tag="p">
          Spamming is strictly prohibited, don't obey this rule and you will be
          teamspeakless.
        </MDBBox>
        <MDBBox tag="p">
          <b>Powered by:</b>
        </MDBBox>
        <img
          alt="TS_Inline_BlueLight_RGB.png"
          class="richtext-image left"
          height="50"
          src="https://www.erebos.xyz/media/images/TS_Inline_BlueLight_RGB.width-500.png"
          width="166"
        />
        <p></p>
      </MDBBox>
    ),
    sharingan_2: (
      <MDBBox class="rich-text">
        <p></p>
        <div class="s-header">Snek.at</div>
        <MDBBox tag="p">
          SNEK is an attempt to create a transparent, open-source non-profit
          platform that allows engineers to categorize and compare. It should
          enable engineers from adjacent fields to visualize each other's skills
          through visualization and project identification. The focus is on
          absolute transparency. By revealing all source code, front-end and
          back-end, it should be possible to know exactly what data is stored
          and how our algorithms work. Unfortunately, there is currently no
          platform with similar goals. However, there is already an open-source
          social network called "
          <a href="https://github.com/Minds">minds.com</a>", which is already
          very successful with another target group.
        </MDBBox>
        <MDBBox tag="p">
          <b>Sponsord by:</b>
        </MDBBox>
        <img
          alt="photo_2020-01-12_15-38-04.jpg"
          class="richtext-image left"
          height="44"
          src="https://www.erebos.xyz/media/images/photo_2020-01-12_15-38-04.width-500.jpg"
          width="205"
        />
        <p></p>
      </MDBBox>
    ),
    sharingan_3: (
      <MDBBox class="rich-text">
        <p></p>
        <div class="s-header">Nize.Host</div>
        <MDBBox tag="p">
          Is our cloud and website space for Developer, there we work with other
          Devs and showcase our projects. If you want to work with us there you
          don't have to be a pro, but you should have interest in good code.
          <br />
        </MDBBox>
      </MDBBox>
    ),
  },
  team: {
    show_team: true,
    nyan_titel: "The Team",
    members: [
      {
        value: {
          name: "suppi",
          description:
            "Minecraft Mod Developer, Leading Java Developer and LOL Player",
          pic: SuppiIMG,
        },
      },
      {
        value: {
          name: "kami",
          description:
            "Teamspeak Kami, Leading OSU! Player, Hunter, Designer, and Translator",
          pic: KamiIMG,
        },
      },
      {
        value: {
          name: "kleberboy",
          description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt",
          pic: TokoIMG,
        },
      },
      {
        value: {
          name: "chris",
          description:
            "Teamspeak DJ, Microsoft Security Advisor and Leading .net Developer",
          pic: ChrisIMG,
        },
      },
      {
        value: {
          name: "sahara",
          description:
            "Representative of the women's rights and Leading female Teamspeak Admin",
          pic: SaharaIMG,
        },
      },
    ],
  },
};

class SectionSharingan extends React.PureComponent {
  render() {
    console.log(value);
    return (
      <article id="projekte" class="sharingan">
        {value.sharingan.show_projects && (
          <Fragment>
            <MDBBox tag="section" id="ts3.party" class="sharingan-s sharingan-1">
              <MDBBox class="c">
                <MDBBox class="iris iris-1">
                  <MDBBox class="mitsudomoe mitsudomoe-1">
                    <img src={Mitsudomoe1IMG} alt="mitsudomoe1" />
                  </MDBBox>
                </MDBBox>
                <div class="sculptures">
                  <img class="sculpture-overlay1" src={sculpture1}></img>
                  <img class="sculpture-overlay2" src={sculpture2}></img>
                </div>
                <MDBBox class="lorem">{value.sharingan.sharingan_1}</MDBBox>
              </MDBBox>
            </MDBBox>
            <MDBBox tag="section" id="nize.host" class="sharingan-s sharingan-2">
              <MDBBox class="c">
                <MDBBox class="iris iris-2">
                  <MDBBox class="mitsudomoe mitsudomoe-2">
                    <img src={Mitsudomoe2IMG} alt="mitsudomoe2" />
                  </MDBBox>
                </MDBBox>
                <div class="sculptures">
                  <img class="sculpture-overlay1" src={sculpture1}></img>
                  <img class="sculpture-overlay2" src={sculpture2}></img>
                </div>
                <MDBBox class="lorem">{value.sharingan.sharingan_2}</MDBBox>
              </MDBBox>
            </MDBBox>
            <MDBBox tag="section" id="chat.erebos" class="sharingan-s sharingan-3">
              <MDBBox class="c">
                <MDBBox class="iris iris-3">
                  <MDBBox class="mitsudomoe mitsudomoe-3">
                    <img src={Mitsudomoe3IMG} alt="mitsudomoe3" />
                  </MDBBox>
                </MDBBox>
                <div class="sculptures">
                  <img class="sculpture-overlay1" src={sculpture1}></img>
                  <img class="sculpture-overlay2" src={sculpture2}></img>
                </div>
                <MDBBox class="lorem">{value.sharingan.sharingan_3}</MDBBox>
              </MDBBox>
            </MDBBox>
          </Fragment>
        )}
        {value.team.show_team && (
          <MDBBox tag="section" id="theteam" class="sharingan-s theteam-s">
            <header class="nyan">
              <a
                class="nyanlink"
                href="https://www.youtube.com/watch?v=QH2-TGUlwu4"
                target="_blank"
              >
                <h3>{value.team.nyan_titel}</h3>
                <img src="https://erebos.xyz/PIC/nyan.gif" alt="nyan" />
              </a>
              <audio id="nyanaudio" preload="auto">
                <source
                  src="https://erebos.xyz/AUDIO/nyan.mp3"
                  type="audio/mpeg"
                />
                <source
                  src="https://erebos.xyz/AUDIO/party.ogg"
                  type="audio/ogg"
                />
              </audio>
            </header>
            <MDBBox class="members">
              <MDBBox class="mrow">
                {value.team.members.map((member, i) => {
                  return (
                    <MDBBox class="member">
                      <MDBBox class="profile">
                        <MDBBox class="pic">
                          <img
                            src={member.value.pic}
                            
                            className="img-fluid"
                          />
                        </MDBBox>
                        <MDBBox class="hollow">
                          <MDBBox class="info">
                            <MDBBox class="ifront">
                              <img
                                src={member.value.pic}
                                alt={member.value.name}
                                className="img-fluid"
                              />
                            </MDBBox>
                            <MDBBox class="iback">
                              <h3>{member.value.name}</h3>
                              <MDBBox tag="p">{member.value.description}</MDBBox>
                            </MDBBox>
                          </MDBBox>
                        </MDBBox>
                      </MDBBox>
                    </MDBBox>
                  );
                })}
              </MDBBox>
            </MDBBox>
            <blink class="thunder">
              <a href="https://twitter.com/ThunderboltOP" target="_blank">
                Alex -&gt;
              </a>
            </blink>
            <img
              class="pony"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8b62a5c9-aa21-4cca-a925-938b185e1180/d3bo0dx-acff85b0-7ee1-4113-acdf-34fd29d5ea5a.png/v1/fill/w_1280,h_967,strp/rainbow_dash_salute_by_atomicgreymon_d3bo0dx-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTY3IiwicGF0aCI6IlwvZlwvOGI2MmE1YzktYWEyMS00Y2NhLWE5MjUtOTM4YjE4NWUxMTgwXC9kM2JvMGR4LWFjZmY4NWIwLTdlZTEtNDExMy1hY2RmLTM0ZmQyOWQ1ZWE1YS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.IqAIWyYoFjeHvlCONs8Y7gw0r1Z8ZkQltPujWlp-yCg"
              alt="photo rainbow_dash_salute_by_atomicgreymon-d3bo0dx"
            />
          </MDBBox> 
        )}
      </article>
    );
  }
}

export default SectionSharingan;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2018-2019 Florian Kleber
 */
