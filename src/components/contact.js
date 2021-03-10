import React from "react";

const Contact = () => {
  return (
    <section id="contact" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="wow fadeInDown animated">Contactanos</h2>
          <p class="wow fadeInDown animated">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget risus vitae massa <br /> semper aliquam quis mattis quam.
          </p>
        </div>
        <div class="row">
          <div class="col-md-8 col-md-offset-2 conForm">
            <div id="message"></div>
            <form method="post" action="#" name="cform" id="cform">
              <input
                name="name"
                id="name"
                type="text"
                class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                placeholder="Tu Nombre..."
              />
              <input
                name="email"
                id="email"
                type="email"
                class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 noMarr"
                placeholder="Email..."
              />
              <textarea
                name="comments"
                id="comments"
                cols=""
                rows=""
                class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                placeholder="Tu Mensaje..."
              ></textarea>
              <input
                type="submit"
                id="submit"
                name="send"
                class="submitBnt"
                value="Send"
              />
              <div id="simple-msg"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;