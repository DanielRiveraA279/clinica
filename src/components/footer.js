/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container-fluid">
        <div id="map-row" class="row">
          <div class="col-xs-12">
            <iframe
              title="mapa"
              width="100%"
              height="400"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.co.uk/maps?f=q&source=s_q&hl=en&geocode=&q=15+Springfield+Way,+Hythe,+CT21+5SH&aq=t&sll=52.8382,-2.327815&sspn=8.047465,13.666992&ie=UTF8&hq=&hnear=15+Springfield+Way,+Hythe+CT21+5SH,+United+Kingdom&t=m&z=14&ll=51.077429,1.121722&output=embed"
            ></iframe>

            <div id="map-overlay" class="col-xs-5 col-xs-offset-6">
              <h2 style={{ margingTop: "0", color: "#fff" }}>Contactanos</h2>
              <address style={{ color: "#fff" }}>
                <strong>Clinica Integral Lomas</strong>
                <br />
                1234 Street Dr.
                <br />
                Vancouver, BC
                <br />
                Argentina
                <br />
                V6G 1G9
                <br />
                <abbr title="Phone">Tel:</abbr> (604) 555-4321
              </address>
              © 2021 DM.{" "}
              <a href="#" target="_blank">
                Todos los derechos reservados
              </a>{" "}
              de DM
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
