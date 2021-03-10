import React from 'react'
import team1 from "../assets/img/team-1.jpg";
import team2 from "../assets/img/team-2.jpg";
import team3 from "../assets/img/team-3.jpg";
import team4 from "../assets/img/team-4.jpg";

const Team = () => {
    return (
        <section id="teams" class="section teams">
        <div class="container">
          <div class="section-header">
            <h2 class="wow fadeInDown animated">Nuestros Especialistas</h2>
            <p class="wow fadeInDown animated">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eget risus vitae massa <br /> semper aliquam quis mattis quam.
            </p>
          </div>
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="person">
                <img src={team1} alt="" class="img-responsive" />
                <div class="person-content">
                  <h4>Jonh Dow</h4>
                  <h5 class="role">Doctor</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit eget
                    risus vitae massa.
                  </p>
                </div>
                <ul class="social-icons clearfix">
                  <li>
                    <a href="#">
                      <span class="fa fa-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="fa fa-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="fa fa-google-plus"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="person">
                {" "}
                <img src={team2} alt="" class="img-responsive" />
                <div class="person-content">
                  <h4>Markus Linn</h4>
                  <h5 class="role">Doctor</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit eget
                    risus vitae massa.
                  </p>
                </div>
                <ul class="social-icons clearfix">
                  <li>
                    <a href="#" class="">
                      <span class="fa fa-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="">
                      <span class="fa fa-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="">
                      <span class="fa fa-google-plus"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="person">
                {" "}
                <img src={team3} alt="" class="img-responsive" />
                <div class="person-content">
                  <h4>Chris Jemes</h4>
                  <h5 class="role">Doctor</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit eget
                    risus vitae massa.
                  </p>
                </div>
                <ul class="social-icons clearfix">
                  <li>
                    <a href="#" class="">
                      <span class="fa fa-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="">
                      <span class="fa fa-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="">
                      <span class="fa fa-google-plus"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="person">
                {" "}
                <img src={team4} alt="" class="img-responsive" />
                <div class="person-content">
                  <h4>Vintes Mars</h4>
                  <h5 class="role">Doctor</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit eget
                    risus vitae massa.
                  </p>
                </div>
                <ul class="social-icons clearfix">
                  <li>
                    <a href="#" class="">
                      <span class="fa fa-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="">
                      <span class="fa fa-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="">
                      <span class="fa fa-google-plus"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    )
}

export default Team
