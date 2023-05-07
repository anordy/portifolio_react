import React, { Component } from "react";

export default class Service extends Component {
  render() {
    return (
      <div>
        <section class="service" id="service">
          <h2 class="heading pb-5">
            Our <span>Services</span>
          </h2>
          <div class="services-container">
            <div class="service-box">
              <i class="bx bx-code-alt"></i>
              <h3>Mobile Developer</h3>
              <p>
                I am a Mobile Developer with expertise in Flutter, Java, and
                React Native. I create visually stunning and user-friendly apps with
                strong problem-solving skills to deliver high-quality solutions
                that exceed client expectations..
              </p>
              <a href="https://" class="btn">
                Read More
              </a>
            </div>
            <div class="service-box">
              <i class="bx bxs-paint"></i>
              <h3>Web Developer</h3>
              <p>
                As a web developer, I create visually appealing and functional
                websites using HTML, CSS, JavaScript, and PHP. I specialize in
                frameworks like React, Laravel, and Vue.js, delivering
                high-quality solutions that meet clients' needs.
              </p>
              <a href="https://" class="btn">
                Read More
              </a>
            </div>
            <div class="service-box">
              <i class="bx bx-bar-chart-alt"></i>
              <h3>Backend Engineer</h3>
              <p>
                I am a Backend Engineer skilled in Python, Java, and NodeJs. I
                develop secure, scalable, and efficient server-side solutions
                using AWS, Docker, MySQL, and MongoDB to meet clients' unique
                needs.
              </p>
              <a href="https://#" class="btn">
                Read More
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
