import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rul7c0g",
        "template_k4jvylb",
        form.current,
        "fVlL772VEAJpfozwR"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact me</h1>
        <span className="contactDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          sapiente?
        </span>
        <form ref={form} onSubmit={sendEmail} action="" className="contactForm">
          <input
            type="text"
            placeholder="Your name"
            className="name"
            name="from_name"
          />
          <input
            type="email"
            placeholder="Your email"
            className="email"
            name="from_email"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your message"
            className="msg"
          ></textarea>
          <button className="submitBtn" type="submit" value="Send">
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
    </div>
  );
};

export default Contact;
