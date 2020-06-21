import React from "react";
import Typed from "typed.js";

const MovingText = ({ children }) => {
  React.useEffect(() => {
    new Typed("#static", {
      stringsElement: "#text-static",
      typeSpeed: 75,
      loop: false,
      smartBackspace: true,
      backSpeed: 50,
      startDelay: 700,
      cursorChar: "",
      backDelay: 250,
    });
  }, []);

  return (
    <div>
      <span id="text-static">{children}</span>
      <h2 id="static" />
    </div>
  );
};

export default MovingText;
