import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1 className="content-hero">{title}</h1>
          <p>
          A "Sava Booking" system for booking appointments in a hospital is an online or mobile-based platform designed to facilitate the scheduling and management of patient appointments with healthcare providers. It aims to streamline the process for both patients and hospital staff by offering an intuitive and efficient interface Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum vel doloribus dolorem, at asperiores blanditiis necessitatibus quasi perspiciatis architecto reiciendis vitae impedit voluptatum animi consequatur sit maiores pariatur aut ipsum nesciunt mollitia magni ea?
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
