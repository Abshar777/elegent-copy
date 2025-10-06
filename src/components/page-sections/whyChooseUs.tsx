"use client";

import Link from "next/link";

const WhyChoosUs = () => {
  return (
    <div className="tt-section padding-top-xlg-140 padding-bottom-xlg-120">
      <div className="tt-section-inner tt-wrap">
        <div className="tt-row">
          <div className="tt-col-lg-4">
            {/* Begin tt-Heading */}
            <div className="tt-heading tt-heading-xlg">
              {/* <h3 className="tt-heading-subtitle tt-text-reveal">Featured</h3> */}
              <h2 className="tt-heading-title tt-text-reveal">Who We Are</h2>
            </div>
            {/* End tt-Heading */}

            <div className="tt-text-uppercase margin-top-30 tt-text-reveal">
              Your Trusted Partner in Trading Success
            </div>
          </div>

          <div className="tt-col-lg-1 padding-top-30"></div>

          <div className="tt-col-lg-7 tt-align-self-center">
            <div className="text-xxlg font-500 tt-text-reveal">
              At <b>Elegant Trading Academy</b>, we are a team of passionate
              financial educators and market professionals committed to helping
              individuals and professionals excel in the world of trading. From
              mastering charts to launching your own brokerage, our academy is
              your one-stop destination to learn, practice, and grow.
            </div>

            <Link
              href="/contact"
              className="tt-btn tt-btn-outline margin-top-40 tt-magnetic-item tt-anim-fadeinup"
            >
              <span data-hover="Enroll Now">Enroll Now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoosUs;
