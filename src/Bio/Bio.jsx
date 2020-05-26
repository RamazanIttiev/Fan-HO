import React from "react";
// Components scss
import "./Bio.scss";
// Images
import FanHo from "./img/Fan-Ho-portret.png";
import Stage from "./img/On-the-stage-of-life.jpg";

function Bio() {
  return (
    <div className="Container Shaddow">
      <section className="Bio">
        <h2 className="Title Bio__title" id="bio">
          bio
        </h2>
        <article className="FanHo">
          <div className="FanHo__wpr">
            <span className="FanHo__author">Fan Ho</span>
            <span className="FanHo__date">(1931-2016)</span>
            <p className="FanHo__descr">
              Fan Ho&rsquo;s (born in&nbsp;Shanghai in&nbsp;1931) photographic career started at&nbsp;the early age of&nbsp;14&nbsp;when given his
              first Kodak Brownie from his father. Within the first year he&nbsp;won his first award in&nbsp;1949 in&nbsp;Shanghai. At&nbsp;the age
              of&nbsp;18, he&nbsp;acquired his twin lens Rolleiflex with which he captured all his famous work after he&nbsp;moved to&nbsp;Hong Kong
              with his parents and continued to&nbsp;purse his love for photography.
            </p>
            <a className="Button FanHo__button">read more</a>
          </div>
          <img src={FanHo} alt="Fan Ho" className="FanHo__img" />
        </article>
        <img src={Stage} alt="On-the-stage-of-life" className="Stage" width="952" height="500" />
        <a href="#works" className="Arrow Bio__arr"></a>
      </section>
    </div>
  );
}

export default Bio;
