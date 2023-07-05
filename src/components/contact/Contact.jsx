import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ust39la",
        "template_m0d08s9",
        form.current,
        "ubUq1rlZ5o2kaUEzb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Dummy43@gmail.com</h5>
            <a href="mailto:dummy43@gmail.com" target="_blank" rel="noreferrer">
              Send Message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>reach Out</h5>
            <a
              href="https://m.me/profile.php?id=100071118893740"
              target="_blank"
              rel="noreferrer"
            >
              Send Message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+918707782418</h5>
            <a
              href="https://api.whatsapp.com/send?phone=8707782418"
              target="_blank"
              rel="noreferrer"
            >
              Send Message
            </a>
          </article>
        </div>
        {/* END CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="eamil"
            id=""
            placeholder="Your Full Email"
            required
          />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your Full Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {" "}
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
