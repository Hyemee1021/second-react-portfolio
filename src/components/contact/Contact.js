import React from "react";
import "./contact.css";
// import { useRef } from "react";
// import emailjs from "@emailjs/browser";

const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_rul7c0g",
  //       "template_k4jvylb",
  //       form.current,
  //       "fVlL772VEAJpfozwR"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         e.target.reset();
  //         alert("Email sent");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <div id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact me</h1>
        <span className="contactDesc">
          I would love to share and expand insights in the IT industry.
        </span>

        <ul style={{ listStyle: "none" }} className="list-group ">
          <li style={{ marginTop: "1.2rem" }} className="  list-group-item">
            Phone: 0402 096 632
          </li>
          <li style={{ marginTop: "1.1rem" }} className="list-group-item ">
            email: hyemee1021@gmail.com
          </li>
          <li style={{ marginTop: "1.1rem" }} className="list-group-item ">
            <a
              href="https://github.com/Hyemee1021"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li style={{ marginTop: "1.1rem" }} className="list-group-item ">
            <a
              href="https://www.linkedin.com/in/hye-mee-park/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
        {/* <form ref={form} onSubmit={sendEmail} action="" className="contactForm">
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
              <i className="fa-brands fa-linkedin"></i>
            </div>

            <div className="link">
              <i className="fa-brands fa-github"></i>
            </div>
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default Contact;
