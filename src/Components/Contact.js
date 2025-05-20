import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";
import contactus from "../assests/img/PainBrushes.webp";

const Contact = () => {
  const [inputValue, setInputValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [LastinputValue, setLastinputValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [isNameValidationVisible, setNameValidationVisible] = useState(false);
  const [isLastNameValidationVisible, setLastNameValidationVisible] =
    useState(false);
  const [isPhoneValidationVisible, setPhoneValidationVisible] = useState(false);
  const [isEmailValidationVisible, setEmailValidationVisible] = useState(false);
  const [isSubmittedSuccessfully, setSubmittedSuccessfully] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Name validation
    if (!inputValue) {
      setNameValidationVisible(true);
    } else {
      setNameValidationVisible(false);
    }

    // Last Name validation
    if (!LastinputValue) {
      setLastNameValidationVisible(true);
    } else {
      setLastNameValidationVisible(false);
    }

    // Phone validation
    if (!phoneValue || isNaN(phoneValue) || phoneValue.length !== 10) {
      setPhoneValidationVisible(true);
    } else {
      setPhoneValidationVisible(false);
    }

    // Email validation
    if (!emailValue) {
      setEmailValidationVisible(true);
    } else {
      setEmailValidationVisible(false);
    }

    // Check if all fields are valid
    if (
      inputValue &&
      LastinputValue &&
      phoneValue &&
      emailValue &&
      phoneValue.length === 10 &&
      !isNaN(phoneValue)
    ) {
      // Send email if no errors
      const serviceId = "service_acmq2ur";
      const templateId = "template_wet2gbc";
      const publicKey = "oLUq8GUEJQYmXuBwY";
      const templateParams = {
        from_name: inputValue,
        from_lastname: LastinputValue,
        from_email: emailValue,
        from_number: phoneValue,
        to_name: "Harry Walton Boone",
        message: messageValue,
      };
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
          setSubmittedSuccessfully(true);
          setInputValue("");
          setEmailValue("");
          setPhoneValue("");
          setMessageValue("");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact - Harry Boone | Inquiries & Commissions</title>
        <meta
          name="description"
          content="Get in touch with Harry Boone for inquiries, commissions, or collaborations. Fill out the contact form or find contact details to reach the artist directly."
        />
      </Helmet>
      <div id="contact" className="top-spacing">
        <div className="container">
          <div className="row">
            <h2>contact</h2>
            <div className="col-sm-12 col-md-12 col-lg-6 img">
              <img
                src={contactus}
                alt="contactus"
                title="contactus"
                rel="noreferrer noopener"
                loading="lazy"
              ></img>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 contact-form">
              <form onSubmit={handleSubmit}>
                <h1 className="main-head-contact">
                  YOUR INQUIRIES AND COMMENTS ARE WELCOME
                </h1>
                <div className="dflex">
                  <span>
                    <input
                      placeholder="First name*"
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <div
                      className={`validation-message ${
                        isNameValidationVisible ? "show" : ""
                      }`}
                    >
                      <p>Name is required.</p>
                    </div>
                  </span>
                  <span>
                    <input
                      placeholder="last name*"
                      type="text"
                      value={LastinputValue}
                      onChange={(e) => setLastinputValue(e.target.value)}
                    />
                    <div
                      className={`validation-message ${
                        isLastNameValidationVisible ? "show" : ""
                      }`}
                    >
                      <p>Name is required.</p>
                    </div>
                  </span>
                </div>
                <div className="dflex form-top-spacing">
                  <span>
                    <input
                      placeholder="e-mail address*"
                      type="email"
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                    />
                    <div
                      className={`validation-message ${
                        isEmailValidationVisible ? "show" : ""
                      }`}
                    >
                      <p>Email is required.</p>
                    </div>
                  </span>
                  <span>
                    <input
                      placeholder="phone number*"
                      type="tel"
                      value={phoneValue}
                      onChange={(e) => {
                        const enteredValue = e.target.value.replace(/\D/, ""); // Remove non-numeric characters
                        if (enteredValue.length <= 10) {
                          setPhoneValue(enteredValue);
                        }
                      }}
                    />
                    <div
                      className={`validation-message ${
                        isPhoneValidationVisible ? "show" : ""
                      }`}
                    >
                      {phoneValue ? (
                        <p>Phone number must be 10 digits. </p>
                      ) : (
                        <p>Phone number is required.</p>
                      )}
                    </div>
                  </span>
                </div>
                <div className=" form-top-spacing">
                  <span>
                    <textarea
                      placeholder="your message*"
                      value={messageValue}
                      onChange={(e) => setMessageValue(e.target.value)}
                    ></textarea>
                  </span>
                </div>
                <ReCAPTCHA sitekey="6LegjOspAAAAAFQ3JmhfLKLpdtDqvtbhHQpKyZjl" />
                <div className="form-top-spacing btns">
                  <button type="submit">submit</button>
                </div>
                {isSubmittedSuccessfully && (
                  <p className="submit-succesfully">
                    Thank you for your message.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
