import React from "react";
import guitar from "../../../assets/images/guitar.jpg";

const Banner = () => {
  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col lg:flex-row">
        <img src={guitar} className="md:w-1/2 rounded-lg shadow-2xl" />
        <div className="md:w-1/2 ml-10">
          <h1 className="text-4xl font-bold">Strings & Things: Your One-Stop Guitar Shop!</h1>
          <p className="py-6">
            Find your perfect sound and express your musical creativity with our
            wide selection of high-quality guitars at our guitar shop. From
            beginner to professional, we have something for every player to help
            you reach your full potential as a musician.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
