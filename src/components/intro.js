import React from "react";

const Intro = () => {
  return (
    <section id="intro" class="section intro">
      <div class="container">
        <div class="col-md-8 col-md-offset-2 text-center">
          <h3>Bienvenido a Clinica Integral Lomas</h3>
          <p>
            Un centro odontologico diferente, donde ponemos siempre tu salud
            como prioridad
          </p>
          <div class="site-info">
            <div class="phoneInfo">
              <h6>Telefonos: </h6>
              <a href="#contact">123–123–2323</a>;<a href="#contact">123–123–2323</a>
            </div>
            <div class="timeInfo">
              <h6>Horarios: </h6> <em>Lun–Viern: 9am–6pm; Sab: 10am–1pm</em>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
