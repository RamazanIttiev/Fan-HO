import React from "react";
// Components scss
import "./Works.scss";
// Images
import Women from "./Img/women.jpg";
import Road from "./Img/road.jpg";
import Boat from "./Img/boat.jpg";
import Ferry from "./Img/ferry.jpg";

function Works() {
  return (
    <div className="Container Shaddow">
      <section className="Works-Books Works">
        <h2 className="Title Works-Books__title" id="works">
          works
        </h2>
        <div className="Works-Books__wpr Works__wpr">
          <article className="Works-Books__item Works__item">
            <a href="#" className="Works-Books__link Works__link">
              <span className="Works-Books__link-name Works__link">hong kong yesterday</span>
              <img src={Women} alt="" className="Works-Books__item-img Works__item-img" width="254" height="508" />
            </a>
          </article>
          <article className="Works-Books__item Works__item">
            <a href="#" className="Works-Books__link Works__link">
              <span className="Works-Books__link-name Works__link"> the living theatre</span>
              <img src={Road} alt="" className="Works-Books__item-img Works__item-img" width="254" height="508" />
            </a>
          </article>
          <article className="Works-Books__item Works__item">
            <a href="#" className="Works-Books__link Works__link">
              <span className="Works-Books__link-name Works__link">A Hong Kong Memoir</span>
              <img src={Boat} alt="" className="Works-Books__item-img Works__item-img" width="254" height="508" />
            </a>
          </article>
        </div>
        <button className="Button Works-Books__button Works__button">all works</button>
        <img src={Ferry} alt="Ferry" className="Works-Books__img Works__img" height="416" />
        <a href="#books" className="Arrow Works__arr"></a>
      </section>
    </div>
  );
}

export default Works;
