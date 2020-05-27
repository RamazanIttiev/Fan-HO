import React from "react";
import "./App.css";
import "./Scss/Blocks.scss";
import "./Scss/Bootstrap-reboot.min.scss";

import Promo from "./Promo/Promo.jsx";
import Bio from "./Bio/Bio.jsx";
import Works from "./Works/Works.jsx";
import Books from "./Books/Books.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  return (
    <div>
      <header>
        <Promo />
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
