import React from "react";

function Footer() {
  // Returns a footer element with the name "Mustafa Pekşen" and the current year
  return <footer>Mustafa Pekşen ©{new Date().getFullYear()}</footer>;
}

export default Footer;
