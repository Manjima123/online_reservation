import React from "react";
import Destinations from "../components/Destinations";

const Showcase = () => {
  return (
    <section className="showcase">
      <div className="showcase-overlay">
        <h1>Welcome,Let us guide you!</h1>
        <p>
          Get to tour the world in style. Select a destination, book your
          tickets, and off you go!
        </p>
      </div>
      {/* <div>
        <Destinations />
      </div> */}
    </section>
  );
};

export default Showcase;
