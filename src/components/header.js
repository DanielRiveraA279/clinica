import React from "react";
import slide2 from "../assets/img/slides/slide2.jpg";
import slide3 from "../assets/img/slides/slide3.JPG";
import slide5 from "../assets/img/slides/slide5.jpg";
import slide6 from "../assets/img/slides/slide6.JPG";
import slide7 from "../assets/img/slides/slide7.jpg";

import logo2 from "../assets/img/logo2.png";
const Header = () => {
  return (
    <section className="banner" role="banner">
      <header id="header">
        <div className="header-content clearfix">
          {" "}
          <a className="logo" href="index.html">
            <i className="icon">
              <img src={logo2} style={{ width: "40px" }} />
            </i>{" "}
            Odontología Lomas
          </a>
          <nav className="navigation" role="navigation">
            <ul className="primary-nav">
              <li>
                <a href="#banner">Home</a>
              </li>
              <li>
                <a href="#services">Tratamientos</a>
              </li>
              <li>
                <a href="#content-3-10">Nosotros</a>
              </li>
              <li>
                <a href="#gallery">Fotos</a>
              </li>
              <li>
                <a href="#teams">Equipo</a>
              </li>
              <li>
                <a href="#testimonials">Testimonios</a>
              </li>
              <li>
                <a href="#contact">Contactos</a>
              </li>
            </ul>
          </nav>
          <a href="#" className="nav-toggle">
            Menu<span></span>
          </a>
        </div>
      </header>

      <div class="banner" id="banner">
        <div class="slider-banner">
          <div style={{ width: "100%" }} data-lazy-background={slide2}>
            <h3
              data-pos="['68%', '-40%', '60%', '12%']"
              data-duration="700"
              data-effect="move"
            >
              Clinica Odontologica Lomas
            </h3>{" "}
            <br />
            <p
              data-pos="['75%', '110%', '75%', '12%']"
              data-duration="700"
              data-effect="move"
            >
              <div style={{ color: "#03A9F4" }}>
                UN CENTRO ODONTOLOGICO DIFERENTE, DONDE PONEMOS SIEMPRE TU SALUD
                COMO PRIORIDAD
              </div>
            </p>
          </div>
          <div style={{ width: "100%" }} data-lazy-background={slide3}>
            <h3
              data-pos="['68%', '-40%', '60%', '12%']"
              data-duration="700"
              data-effect="move"
            >
              Odontopediatria
            </h3>{" "}
            <br />
            <p
              data-pos="['75%', '110%', '75%', '12%']"
              data-duration="700"
              data-effect="move"
            >
              <div style={{ color: "#03A9F4" }}>
              La odontopediatrìa es la rama de la odontologìa encargada de tratar a los niños
              </div>
            </p>
          </div>
          <div style={{ width: "100%" }} data-lazy-background={slide5}>
            <h3
              data-pos="['68%', '-40%', '60%', '12%']"
              data-duration="700"
              data-effect="move"
            >
              Blanqueamiento
            </h3>{" "}
            <br />
            <p
              data-pos="['75%', '110%', '75%', '12%']"
              data-duration="700"
              data-effect="move"
            >
              <div style={{ color: "#03A9F4" }}>
                UN CENTRO ODONTOLOGICO DIFERENTE, DONDE PONEMOS SIEMPRE TU SALUD
                COMO PRIORIDAD
              </div>
            </p>
          </div>
          <div style={{ width: "100%" }} data-lazy-background={slide6}>
            <h3
              data-pos="['68%', '-40%', '60%', '12%']"
              data-duration="700"
              data-effect="move"
            >
              Radiologìa Odontològica
            </h3>{" "}
            <br />
            <p
              data-pos="['75%', '110%', '75%', '12%']"
              data-duration="700"
              data-effect="move"
            >
              <div style={{ color: "#03A9F4" }}>
                TODO LISTO PARA BRINDARTE LA MEJOR ATENCIÒN
              </div>
            </p>
          </div>
          <div style={{ width: "100%" }} data-lazy-background={slide7}>
            <h3
              data-pos="['68%', '-40%', '60%', '12%']"
              data-duration="700"
              data-effect="move"
            >
              Odontologìa General
            </h3>{" "}
            <br />
            <p
              data-pos="['75%', '110%', '75%', '12%']"
              data-duration="700"
              data-effect="move"
            >
              <div style={{ color: "#03A9F4" }}>
                TODO LISTO PARA BRINDARTE LA MEJOR ATENCIÒN
              </div>
            </p>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Header;
