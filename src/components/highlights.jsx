import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

function highlights() {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
      delay:0.5,
      scrollTrigger: {
        trigger: "#heading",
        toggleActions: "restart none none none",
      },
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.25,
      scrollTrigger: {
        trigger: "#heading",
        toggleActions: "restart none none none",
      },
    });
  });
  return (
    <div className="w-full bg-zinc h-full common-padding overflow-hidden">
      <div className="screen-max-width px-2 md:px-96">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5" id="heading">
            <p className="link">
              Watch the film
              <img src={watchImg} className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </div>
  );
}

export default highlights;
