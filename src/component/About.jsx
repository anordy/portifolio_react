import React , { Component } from "react";

export default class About extends Component {
    render() {
        return (
    
          <section class="about" id="about">
            <div class="about-img">
            <img src="images/profile.png" alt="profile" />
        </div>
        <div class="about-content">
            <h2 class="heading">About <span>Me</span></h2>
            <h3>Software Developer!</h3>
            <p> I am a highly competent IT professional with a proven track record in designing and developing Web
                application , mobile applications, websites, APIs and managing databases. I have strong technical skills
                as well as excellent interpersonal skills, enabling me to interact with a wide range of people.</p>
            <a href="https//#" class="btn">Read More</a>
        </div>
          </section>
        )
      }
}