"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
const ContactForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("+91");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const url =
    "https://script.google.com/macros/s/AKfycbwHt9ISXBbmqGUgzWFdgJxdLpmx2VzWj5N_yiDH6FMyFzJeFxyjX1rqBd0KMTA64VvRxQ/exec";
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    try {
      await fetch(url, {
        method: "POST",

        body: JSON.stringify({
          Name: name,
          Email: email,
          PhoneNumber: phoneNumber,
        }),
      });
      toast.success("Message sent successfully");
      setName("");
      setEmail("");
      setPhoneNumber("+91");
    } catch (error) {
      console.error(error);
      toast.error("Message sent failed");
    } finally {
      setLoading(false);
    }
  };

  const [isValidPhone, setIsValidPhone] = useState(false);

  // Format input and validate
  const phoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, ""); // remove non-digits
    if (input.startsWith("91")) {
      input = input.substring(2); // remove extra 91 if typed
    }

    if (input.length > 10) input = input.substring(0, 10); // max 10 digits after +91

    let formatted = "+91";
    if (input.length > 0) formatted += "-" + input.substring(0, 5);
    if (input.length > 5) formatted += "-" + input.substring(5);

    setPhoneNumber(formatted);

    // Validation: Ensure 10  digits are present

    setIsValidPhone(/^\+91-\d{5}-\d{5}$/.test(formatted));
  };

  return (
    <div className="tt-section padding-top-40 padding-bottom-xlg-120">
      <div className="tt-section-inner tt-wrap">
        <div className="tt-row tt-xl-row-reverse">
          <div className="tt-col-xl-5">
            {/* Begin contact info */}
            <div className="tt-contact-info margin-bottom-80">
              {/* Begin big arrow */}
              <div className="tt-big-arrow tt-ba-angle-bottom-left tt-anim-fadeinup">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                </svg>
              </div>
              {/* End big arrow */}

              <div className="tt-contact-info-inner">
                <div className="margin-bottom-50 tt-anim-fadeinup">
                  <h6>Let's Talk</h6>
                  <p>
                    You're just one step away from streamlining your supply
                    chain and boosting your trade efficiency.
                  </p>
                </div>

                {/* Begin contact details */}
                <div className="tt-contact-details margin-bottom-50 tt-anim-fadeinup">
                  <h6>Details</h6>
                  <ul>
                    <li>
                      <span className="tt-cd-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                      <a
                        href="https://www.google.com/maps/place/121+King+St,+Melbourne+VIC+3000,+Austraalia/@-37.8172467,144.9532001,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad65d4dd5a05d97:0x3e64f855a564844d!8m2!3d-37.817251!4d144.955775!16s%2Fg%2F11g0g8c54h?entry=ttu&amp;g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
                        className="tt-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Bangalore, Tamil Nadu, India | Online
                      </a>
                    </li>
                    <li>
                      <span className="tt-cd-icon">
                        <i className="fas fa-phone"></i>
                      </span>
                      <a href="tel:+918971746253 " className="tt-link">
                        +918971746253
                      </a>
                    </li>
                    <li>
                      <span className="tt-cd-icon">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <a
                        href="mailto:info@eleganttradingacademy.com"
                        className="tt-link"
                      >
                        info@eleganttradingacademy.com
                      </a>
                    </li>
                    <li>
                      <span className="tt-cd-icon">
                        <i className="fas fa-file-alt"></i>
                      </span>
                      <a
                        href="/Terms_and_Conditions_ELEGENT_TRADING_ACADEMY.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tt-link"
                      >
                        Terms and Conditions
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End contact details */}

                {/* Begin social buttons */}
                <div className="tt-social-buttons margin-bottom-50 tt-anim-fadeinup">
                  <h6>Social</h6>
                  <ul>
                    <li>
                      <a
                        href="https://wa.me/918971746253 "
                        className="tt-magnetic-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=61577236858579"
                        className="tt-magnetic-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/elegant_trading_academy"
                        className="tt-magnetic-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/elegant-trading-academy/posts/?feedView=all" // example: https://wa.me/1234567890
                        className="tt-magnetic-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>

                    {/* <li>
                        <a
                          href="https://x.com/Themetorium"
                          className="tt-magnetic-item"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </li> */}
                  </ul>
                </div>
                {/* End social buttons */}
              </div>
            </div>
            {/* End contact info */}
          </div>

          <div className="tt-col-xl-7">
            {/* Begin form */}
            <form
              // after submit i want to show a success message
              // and after 3 seconds i want to redirect to the home page
              // and after 3 seconds i want to redirect to the home page
              onSubmit={handleSubmit}
              // action={url}
              // target="_blank"
              className=" tt-form-creative tt-form-lg"
            >
              {/* Contact form messages */}
              <div id="tt-contact-form-messages" role="alert">
                <div className="tt-cfm-inner"></div>
                <div className="tt-cfm-close hide-cursor">
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </div>

              <div className="tt-contact-form-inner">
                {/* <small className="tt-form-text margin-bottom-30">
                    <em>Fields marked with an asterisk (*) are required!</em>
                  </small> */}

                <div className="tt-form-group tt-anim-fadeinup">
                  <label htmlFor="sender-name">
                    What's your name? <span className="required">*</span>
                  </label>
                  <input
                    className="tt-form-control"
                    id="sender-name"
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="tt-form-group tt-anim-fadeinup">
                  <label htmlFor="sender-email">
                    What's your email? <span className="required">*</span>
                  </label>
                  <input
                    className="tt-form-control"
                    id="sender-email"
                    type="email"
                    name="email"
                    placeholder="john@smith.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="tt-form-group tt-anim-fadeinup">
                  <label htmlFor="sender-email">
                    What's your phone number?{" "}
                    <span className="required">*</span>
                  </label>
                  <input
                    className="tt-form-control"
                    id="sender-phoneNumber"
                    type="tel"
                    name="phoneNumber"
                    //
                    value={phoneNumber}
                    onChange={phoneNumberChange}
                    placeholder="+91-XXXXX-XXXXX"
                    required
                  />
                </div>

                <div className="tt-anim-fadeinup">
                  <button
                    type="submit"
                    className={`tt-btn tt-btn-primary tt-magnetic-item ${
                      !isValidPhone || loading
                        ? "opacity-50 pointer-events-none"
                        : ""
                    }`}
                    disabled={!isValidPhone || loading}
                  >
                    {loading ? (
                      <span>
                        <i className="fa-solid fa-spinner fa-spin"></i>
                      </span>
                    ) : (
                      <span data-hover="Send Message">Send Message</span>
                    )}
                  </button>
                </div>
              </div>
            </form>
            {/* End form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
