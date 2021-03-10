import React from "react";
import imgPortafolio1 from "../assets/img/portfolio/img1.jpg";
import imgPortafolio2 from "../assets/img/portfolio/img2.jpg";
import imgPortafolio3 from "../assets/img/portfolio/img3.jpg";
import imgPortafolio4 from "../assets/img/portfolio/img4.jpg";
import imgPortafolio5 from "../assets/img/portfolio/img6.jpg";
import imgPortafolio6 from "../assets/img/portfolio/img7.jpg";
import imgPortafolio7 from "../assets/img/portfolio/img8.jpg";
import imgPortafolio8 from "../assets/img/portfolio/img9.JPG";

const Gallery = () => {
  return (
    <section id="gallery" class="gallery section">
      <div class="container-fluid">
        <div class="section-header">
          <h2 class="wow fadeInDown animated">Galeria</h2>
          <p class="wow fadeInDown animated">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget risus vitae massa <br /> semper aliquam quis mattis quam.
          </p>
        </div>

        <div class="row no-gutter">
          <div class="col-lg-3 col-md-6 col-sm-6 work">
            <a href={imgPortafolio1} class="work-box">
              <img src={imgPortafolio1} alt="" />
              <div class="overlay">
                <div class="overlay-caption">
                  <p>
                    <span class="icon icon-magnifying-glass"></span>
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 work">
            {" "}
            <a href={imgPortafolio2} class="work-box">
              {" "}
              <img src={imgPortafolio2} alt="" />
              <div class="overlay">
                <div class="overlay-caption">
                  <p>
                    <span class="icon icon-magnifying-glass"></span>
                  </p>
                </div>
              </div>
            </a>{" "}
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 work">
            <a href={imgPortafolio3} class="work-box">
              <img src={imgPortafolio3} alt="" />
              <div class="overlay">
                <div class="overlay-caption">
                  <p>
                    <span class="icon icon-magnifying-glass"></span>
                  </p>
                </div>
              </div>
            </a>{" "}
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 work">
            <a href={imgPortafolio4} class="work-box">
              <img src={imgPortafolio4} alt="" />
              <div class="overlay">
                <div class="overlay-caption">
                  <p>
                    <span class="icon icon-magnifying-glass"></span>
                  </p>
                </div>
              </div>
            </a>{" "}
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 work">
            <a href={imgPortafolio5} class="work-box">
              <img src={imgPortafolio5} alt="" />
              <div class="overlay">
                <div class="overlay-caption">
                  <p>
                    <span class="icon icon-magnifying-glass"></span>
                  </p>
                </div>
              </div>
            </a>{" "}
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 work">
            <a href={imgPortafolio6} class="work-box">
              <img src={imgPortafolio6} alt="" />
              <div class="overlay">
                <div class="overlay-caption">
                  <p>
                    <span class="icon icon-magnifying-glass"></span>
                  </p>
                </div>
              </div>
            </a>{" "}
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 work">
            <a href={imgPortafolio7} class="work-box">
              <img src={imgPortafolio7} alt="" />
              <div class="overlay">
                <div class="overlay-caption">
                  <p>
                    <span class="icon icon-magnifying-glass"></span>
                  </p>
                </div>
              </div>
            </a>{" "}
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 work">
            <a href={imgPortafolio8} class="work-box">
              <img src={imgPortafolio8} alt="" />
              <div class="overlay">
                <div class="overlay-caption">
                  <p>
                    <span class="icon icon-magnifying-glass"></span>
                  </p>
                </div>
              </div>
            </a>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
