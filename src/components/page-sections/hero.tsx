"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useEffect } from "react";  

const HeroVideo = dynamic(() => import('@/components/ui/heroVideo'), {
  ssr: false, 
  loading: () => <div style={{
    position:"relative",
    width:"100%",
    height:"100%"
  }}>
    <Image style={{
      // position:"relative",
      objectFit:"cover",
      width:"100%",
      height:"100%"

    }} fill src="/hero.png" alt="Logo" />
  </div>,
});

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div
      id="page-header"
      className="ph-full ph-full-m ph-center ph-cap-xxxxlg ph-image-parallax ph-caption-parallax"
    >
      {/* Begin page header video */}
      <div className="ph-video ph-video-grayscale ph-video-cover-1">
        <div style={{
          position:"relative"
        }} className="ph-video-inner relative">
          <HeroVideo />
        </div>
      </div>
      {/* End page header video */}

      <div className="page-header-inner tt-wrap">
        <div className="ph-caption">
          <div className="ph-caption-inner">
            {/* <h2 className="ph-caption-subtitle">Subtitle</h2> */}
            <h1 className="ph-caption-title">
              TRADE WITH  
              <br />
              CONFIDENCE
            </h1>
            <div className="ph-caption-description max-width-700">
              Bangalore’s Trusted Trading Hub
              <br />
              Elegant Trading Academy helps you master the art of trading.
            </div>
          </div>
        </div>
      </div>

      {/* Begin page header mask */}
      <div className="page-header-inner ph-mask">
        <div className="ph-mask-inner tt-wrap">
          <div className="ph-caption">
            <div className="ph-caption-inner">
              {/* <h2 className="ph-caption-subtitle">Subtitle</h2> */}
              <h1 className="ph-caption-title">
                TRADE WITH
                <br />
                CONFIDENCE
              </h1>
              <div className="ph-caption-description max-width-700">
                Bangalore’s Trusted Trading Hub
                <br />
                Elegant Trading Academy helps you master the art of trading.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End page header mask */}

      {/* Begin social buttons */}
      <div className="ph-social">
        <ul>
          <li>
            <a
              href="https://www.instagram.com/elegant.academy_?igsh=aDJ2NGRwOGE3ZXJm"
              className="tt-magnetic-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
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
              href="https://wa.me/918971746253 " // example: https://wa.me/1234567890
              className="tt-magnetic-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </li>
          <li>
            <a href="tel:+918971746253 " className="tt-magnetic-item">
              <i className="fa-solid fa-phone"></i>
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
        </ul>
      </div>
      {/* End social buttons */}

      {/* Begin scroll down */}
      <div className="tt-scroll-down">
        <a
          href="#tt-page-content"
          className="tt-scroll-down-inner md:scale-[.5] tt-magnetic-item"
          data-offset="0"
        >
          <div className="tt-scrd-icon"></div>
          <svg viewBox="0 0 500 500">
            <defs>
              <path
                d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                id="textcircle"
              ></path>
            </defs>
            <text dy="30">
              <textPath xlinkHref="#textcircle">
                Scroll to Explore - Scroll to Explore -
              </textPath>
            </text>
          </svg>
        </a>
      </div>
      {/* End scroll down */}
    </div>
  );
};

export default Hero;
