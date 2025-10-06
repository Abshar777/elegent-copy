"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <header
      id="tt-header"
      className="tt-header-alter tt-header-scroll tt-header-filled "
    >
      <div className="tt-header-inner tt-noise">
        <div className="tt-header-col tt-header-col-left">
          {/* Logo */}
          <div className="tt-logo">
            <Link href="/" className="">
              <img
                style={{ scale: 3.3, transform: "translate(10px, 0px)" }}
                src="/logo-min.png"
                className="tt-logo-light "
                alt="Logo"
              />
              <img
                style={{ scale: 3.5, transform: "translate(10px, 0px)" }}
                src="/logo-min.png"
                className="tt-logo-dark "
                alt="Logo"
              />
            </Link>
          </div>
        </div>

        <div className="tt-header-col tt-header-col-center">
          <nav className="tt-main-menu tt-m-menu-center">
            <div className="tt-main-menu-holder">
              <div className="tt-main-menu-inner">
                <div className="tt-main-menu-content">
                  <ul className="tt-main-menu-list">
                    <li
                      className={`tt-submenu-wrap ${
                        pathname === "/" ? "active" : ""
                      }`}
                    >
                      <Link href="/">Home</Link>
                    </li>

                    <li
                      className={`tt-submenu-wrap ${
                        pathname === "/gallery" ? "active" : ""
                      }`}
                    >
                      <Link href="/gallery">Gallery</Link>
                    </li>

                    <li
                      className={`tt-submenu-wrap ${
                        pathname === "/about" ? "active" : ""
                      }`}
                    >
                      <Link href="/about">About</Link>
                    </li>

                    <li
                      className={`tt-submenu-wrap ${
                        pathname === "/contact" ? "active" : ""
                      }`}
                    >
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="tt-header-col tt-header-col-right">
          <div id="tt-m-menu-toggle-btn-wrap">
            <div className="tt-m-menu-toggle-btn-text">
              <span className="tt-m-menu-text-menu">Menu</span>
              <span className="tt-m-menu-text-close">Close</span>
            </div>
            <div className="tt-m-menu-toggle-btn-holder">
              <a href="#" className="tt-m-menu-toggle-btn">
                <span></span>
              </a>
            </div>
          </div>

          <Link
            href="/contact"
            className="tt-btn tt-btn-secondary hide-from-xlg tt-magnetic-item"
          >
            <span data-hover="Contact">Contact</span>
          </Link>

          <div className="tt-style-switch">
            <div className="tt-style-switch-inner tt-magnetic-item">
              <div className="tt-stsw-light">
                <i className="fas fa-sun"></i>
              </div>
              <div className="tt-stsw-dark">
                <i className="fas fa-moon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
