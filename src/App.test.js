import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2018-2019 Florian Kleber
 */
