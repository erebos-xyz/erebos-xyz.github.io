//> React
// Contains all the functionality necessary to define React components
import React from "react";

class AudioParty extends React.Component {
  render() {
    return (
      <audio id="partyaudio" preload="auto">
        <source src="https://erebos.xyz/AUDIO/party.ogg" type="audio/ogg" />
        <source src="https://erebos.xyz/AUDIO/party.mp3" type="audio/mpeg" />
      </audio>
    );
  }
}

export default AudioParty;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2018-2019 Florian Kleber
 */
