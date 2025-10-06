"use client";

import React, { useState, useEffect } from "react";

const footerData = [
  {
    heading: "Links",
    items: [
      { label: "Support", href: "https://wa.me/918971746253 " },
      { label: "Terms of Use", href: "/Terms_and_Conditions_ELEGENT_TRADING_ACADEMY.pdf" },
      { label: "Privacy Policy", href: "/Terms_and_Conditions_ELEGENT_TRADING_ACADEMY.pdf" },
    ],
  },
  {
    heading: "Sitemap",
    items: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Contact",
    items: [
      {
        label: (
          <>
            {/* +91 7736859513 */}
            {/* <br />  */}
             Bangalore | Online
          </>
        ),
        href: "",
        target: "_blank",
        rel: "nofollow noopener",
      },
      {
        label: "info@eleganttradingacademy.com",
        href: "mailto:info@eleganttradingacademy.com",
      },
      {
        label: "+918971746253 ",
        href: "tel:+918971746253 ",
      },
    ],
    social: [
      {
        icon: "fa-instagram",
        href: "https://www.instagram.com/elegant_trading_academy/",
      },
      {
        icon: "fa-whatsapp",
        href: "https://wa.me/918971746253 ",
      },
      {
        icon: "fa-linkedin",
        href: "https://www.linkedin.com/company/elegant-trading-academy/posts/?feedView=all",
      },
      {
        icon: "fa-facebook",
        href: "https://www.facebook.com/profile.php?id=61577236858579",
      },
    ],
  },
];

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <footer id="tt-footer" className="border-top">
      <div className="tt-footer-inner tt-wrap">
        <div className="tt-row">
          {footerData.map((section, index) => (
            <div key={index} className="tt-col-xl-3 tt-col-sm-6">
              <div className="tt-footer-widget">
                <h5 className="tt-footer-widget-heading">{section.heading}</h5>
                <ul className="tt-footer-widget-list">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.href}
                        className="tt-link"
                        target={"_self"}
                        rel={""}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                  {section.social && (
                    <li>
                      <div className="tt-social-buttons">
                        <ul>
                          {section.social.map((socialItem, i) => (
                            <li key={i}>
                              <a
                                href={socialItem.href}
                                className="tt-magnetic-item"
                                target="_blank"
                                rel="noopener"
                              >
                                <i
                                  className={`fa-brands ${socialItem.icon}`}
                                ></i>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}

          {/* Logo & Copyright */}
          <div className="tt-col-xl-3 tt-col-sm-6 tt-justify-content-xl-end">
            <div className="tt-footer-widget">
              <ul className="tt-footer-widget-list">
                <li>
                  <div className="tt-footer-logo md:ml-10">
                    <a href="/" className="tt-magnetic-item">
                      <img
                        src="/logo-min.png"
                        style={{ scale: 2.5 ,filter:"grayscale(100%) brightness(10)"}}
                        className="tt-logo-light"
                        loading="lazy"
                        alt="Logo"
                      />
                      <img
                        src="/logo-min.png"
                        className="tt-logo-dark"
                        loading="lazy"
                        style={{ scale: 2.5  }}
                        alt="Logo"
                      />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="tt-footer-copyright md:ml-5">
                   
                    <a
                      href="www.eleganttradingacademy.com"
                      className="tt-link"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      eleganttradingacademy.com
                    </a>
                    <br />
                    Elegant Trading Academy   © {new Date().getFullYear()}{" "}  All Rights Reserved
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
