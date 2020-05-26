import React from "react";
// Scss
import "./App.scss";
import "./scss/Blocks.scss";
// Files
import "./scss/Bootstrap-reboot.min.scss";
// Components
import Logo from "./Logo/Logo";
import Bio from "./Bio/Bio";
import Works from "./Works/Works";
import Books from "./Books/Books";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
      </header>
      <section>
        <Bio />
      </section>
      <section>
        <Works />
      </section>
      <section>
        <Books />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
