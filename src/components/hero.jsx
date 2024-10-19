import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";

function hero() {
  const [videoSrc, setvideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      duration: 1,
      delay: 1.5,
    });

    gsap.to('#cta',{
      opacity:1,
      duration:1,
      delay:3,
      y:-50
    })
  }, []);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) setvideoSrc(smallHeroVideo);
    else setvideoSrc(heroVideo);
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  });
  return (
    <div className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <h1 className="hero-title" id="hero">
          iPhone 15 Pro
        </h1>
        <div className="md:w-10/12 h-9/12">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className="pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="flex flex-col items-center opacity-0 translate-y-20" id="cta">
        <a href="#buy" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/m or $999</p>
      </div>
    </div>
  );
}

export default hero;
