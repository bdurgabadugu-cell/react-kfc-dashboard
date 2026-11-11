import React from "react";
import swiggy from "../images/swiggy.webp";
import zomato from "../images/zomato.webp";
import kfc from "../images/kfc_png.webp"

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <span className="title">TASTE THE BEST KFC CHICKEN</span>
        <p>
          KFC (Kentucky Fried Chicken) is one of the world's most popular
          fast-food restaurant chains. It is famous for its crispy fried chicken
          made with a special blend of herbs and spices. KFC was founded by
          Colonel Harland Sanders in 1930. Today, KFC has thousands of outlets
          serving customers in many countries around the world. KFC offers a
          variety of food items such as burgers, chicken buckets, fries, and
          beverages. Many people enjoy KFC because of its unique taste, quality
          food, and quick service.
        </p>
        <div className="btns">
          <button className="btn1">ORDER NOW</button>
          <button className="btn2">KFC CHICKEN</button>
        </div>
        <div className="social">
          <span className="social-1">Also Available On</span>
          <div className="social-icons">
            <img src={swiggy} alt="" />
            <img src={zomato} alt="" />
          </div>
        </div>
      </div>
      <div className="right">
        <img src={kfc} alt="" />
      </div>
    </div>
  );
};

export default Hero;
