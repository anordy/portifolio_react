import React , { Component } from "react";

export default class Contact extends Component {
    render() {
        return (
    
          <section class="contact" id="contact">
        <h2 class="heading">Contact <span>Me!</span></h2>

        <form action="https://formspree.io/f/mgejwlvq" method="POST">
            <div class="input-box">
                <input type="text" name="name" placeholder="Full Name" />
                <input type="text" name="email" placeholder="Email Address" />
            </div>
            <div class="input-box">
                <input type="number" name="mobile" placeholder="Mobile Number" />
                <input type="text" name="subject" placeholder="Email Subject" />
            </div>
            <textarea name="body" id="" placeholder="Your Message" cols="30" rows="10"></textarea>
            <input type="submit" value="Send Message" class="btn" />
        </form>
    </section>
        )
      }
}