import React from "react";
import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";

const Destinations = () => {
  return (
    <section className="destinations">
      <h3>Now available in 46 countries!</h3>
      <div className="grid">
        <div>
          <img src={image1} alt="destination-1" />
          <h3>Experience Luxurious Ride</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, ab nesciunt? Molestias rem qui sequi!
          </p>
        </div>

        <div>
          <img src={image2} alt="destination-2" />
          <h3>Explore Your Dream Place</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, ab nesciunt? Molestias rem qui sequi!
          </p>
        </div>

        <div>
          <img src={image3} alt="destination-3" />
          <h3>Most viewed Place</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, ab nesciunt? Molestias rem qui sequi!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
