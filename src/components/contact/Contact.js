import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <section>
      <div id="contact">
        <h1 className="contactPageTitle">Contact me</h1>
        <span className="contactDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          sapiente?
        </span>
        <form action="" className="contactForm">
          <input type="text" placeholder="Your name" className="name" />
          <input type="email" placeholder="Your email" className="email" />
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            className="msg"
          ></textarea>
          <button className="submitBtn" type="submit" value="send">
            Submit
          </button>
          <div className="links">
            <div className="link">
              <i class="fa-brands fa-linkedin"></i>
            </div>

            <div className="link">
              <i class="fa-brands fa-github"></i>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
