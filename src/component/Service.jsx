import React , { Component } from "react";

export default class Service extends Component {
    render() {
        return (
    
         <div>
           <section class="service" id="service">
        <h2 class="heading pb-5">Our <span>Services</span></h2>
        <div class="services-container">
            <div class="service-box">
                <i class="bx bx-code-alt"></i>
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, molestiae facilis. A veritatis, quaerat
                    officiis optio sint dolor porro nostrum voluptatem aperiam ipsum eligendi, est commodi eos officia
                    .</p>
                <a href="https://" class="btn">Read More</a>
            </div>
            <div class="service-box">
                <i class="bx bxs-paint"></i>
                <h3>Mobile Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, molestiae facilis. A veritatis, quaerat
                    officiis optio sint dolor porro nostrum voluptatem aperiam ipsum eligendi, est commodi eos officia
                    .</p>
                <a href="https://" class="btn">Read More</a>
            </div>
            <div class="service-box">
                <i class="bx bx-bar-chart-alt"></i>
                <h3>UI/UX Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, molestiae facilis. A veritatis, quaerat
                    officiis optio sint dolor porro nostrum voluptatem aperiam ipsum eligendi, est commodi eos officia
                    .</p>
                <a href="https://#" class="btn">Read More</a>
            </div>

        </div>
    </section>
         </div>
        )
      }
}