//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import { BrowserRouter as Router } from "react-router-dom";

//> Components
/**
 * Footer: Global Footer
 * Navbar: Global navigation bar
 */
import { FooterGlobal, NavbarGlobal } from "./components/organisms";
// Routes
import Routes from "./Routes";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="flyout">
          <NavbarGlobal />
          <main>
            <Routes />
          </main>
          <FooterGlobal />
        </div>
      </Router>
    );
  }
}

export default App;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2018-2019 Florian Kleber
 */
