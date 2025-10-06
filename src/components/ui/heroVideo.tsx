import React from 'react'

const HeroVideo = () => {
  return (
    <video
            loop
            muted
            autoPlay
            playsInline
            preload="none"
            // poster="/assets/vids/1920/video-1-1920.jpg"
          >
            <source src={"/assets/vids/heroBg.mp4"} type="video/webm" />
          </video>
  )
}

export default HeroVideo
