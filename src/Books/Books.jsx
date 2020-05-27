import React from "react";
// Components scss
import "./Books.scss";
// Images
import Book1 from "./Img/Book1.png";
import Book2 from "./Img/Book2.png";
import Book3 from "./Img/Book3.png";
import Books__img from "./Img/Books__img.png";

function Books() {
  return (
    <div className="Container Shaddow">
      <section className="Works-Books Books">
        <h2 className="Title Works-Books__title Books__title" id="books">
          books
        </h2>
        <div className="Works-Books__wpr Books__wpr">
          <article className="Works-Books__item Books__item">
            <a href="#" className="Works-Books__link Books__link">
              <span className="Works-Books__link-name Books__link-name">hong kong yesterday</span>
              <img src={Book1} alt="" className="Works-Books__item-img Books__item-img" width="300" height="330" />
            </a>
          </article>
          <article className="Works-Books__item Books__item">
            <a href="#" className="Works-Books__link Books__link">
              <span className="Works-Books__link-name Books__link-name">the living theatre</span>
              <img src={Book2} alt="" className="Works-Books__item-img Books__item-img" width="300" height="330" />
            </a>
          </article>
          <article className="Works-Books__item Books__item">
            <a href="#" className="Works-Books__link Books__link">
              <span className="Works-Books__link-name Books__link-name">A Hong Kong Memoir</span>
              <img src={Book3} alt="" className="Works-Books__item-img Books__item-img" width="300" height="330" />
            </a>
          </article>
        </div>
        <button className="Button Works-Books__button Books__button">all works</button>
        <img src={Books__img} alt="Ferry" className="Works-Books__img Books__img" height="510" />
      </section>
    </div>
  );
}

export default Books;
