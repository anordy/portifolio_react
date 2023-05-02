import React , { Component } from "react";

export default class Contact extends Component {
    render() {
        return (
    
          <section class="contact" id="contact">
        <h2 class="heading">Contact <span>Me!</span></h2>

        <form action="#">
            <div class="input-box">
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Email Address" />
            </div>
            <div class="input-box">
                <input type="number" placeholder="Mobile Number" />
                <input type="text" placeholder="Email Subject" />
            </div>
            <textarea name="" id="" placeholder="Your Message" cols="30" rows="10"></textarea>
            <input type="submit" value="Send Message" class="btn" />
        </form>
    </section>
        )
      }
}