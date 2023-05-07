import React , { Component } from "react";
import { TypeAnimation } from "react-type-animation";
export default class Home extends Component {
    render() {
        return (
    
          <section className="home" id="home">
            <div className="home-content">
              <h3>Hello It's me</h3>
              <h1>Anord Patrick</h1>
              <h3>And I'm a <TypeAnimation
      sequence={[
        'Mobile & Web Developer', 
        1000, 
        'Backend Engineer',
        () => {
          console.log('Sequence completed'); 
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', display: 'inline-block' }}
    /></h3>
              <p>I am a software engineer based in Dar es Salaam, specializing <br /> in
                building (and occasionally designing) highly perfomant <br /> applications
                that solve real-world problems and provide <br /> users with an awesome exiperience.
              </p>
              
              <div className="social-media">
                <a href="https://github.com/anordy"><i className="bx bxl-github" /></a>
                <a href="https://www.instagram.com/anordy_p/"><i className="bx bxl-instagram-alt" /></a>
                <a href="https://www.linkedin.com/in/anord-patrick-96a294157/"><i className="bx bxl-linkedin" /></a>
              </div>
              <a href="https://drive.google.com/file/d/10j71WVJGWHZfYi1r4Nb_Q6pdGICYA0TF/view?usp=sharing" className="btn">Download CV</a>
            </div>
            <div className="home-img">
              <img src="images/profile.png" alt="profile" />
            </div>
          </section>
        )
      }
}