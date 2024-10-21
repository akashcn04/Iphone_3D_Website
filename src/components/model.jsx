import React, { useRef, useState } from "react";
import Modelview from "./modelview";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { yellowImg } from "../utils";
import * as THREE from "three";
import { models, sizes } from "../constants";

function model() {
  const [size, setsize] = useState("small");
  const [model, setmodel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    image: yellowImg,
  });

  //camera control for model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  //model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  //rotaion value track
  const [smallRotation, setSamllRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  useGSAP(() => {
    gsap.to("#heading", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#heading",
        toggleActions: "restart none none none",
      },
    });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 className="section-heading" id="heading">
          Take a closer look
        </h1>
      </div>

      <div className="flex flex-col items-center mt-5">
        <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden">
          <Modelview
            index={1}
            groupref={small}
            gsapType="view1"
            controlRef={cameraControlSmall}
            setRotationstate={smallRotation}
            item={model}
            size={size}
          />

          <Modelview
            index={2}
            groupref={large}
            gsapType="view2"
            controlRef={cameraControlLarge}
            setRotationstate={largeRotation}
            item={model}
            size={size}
          />

          <Canvas
            className="w-full h-full"
            style={{
              position: "fixed",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              overflow: "hidden",
            }}
            eventSource={document.getElementById("root")}
          >
            <View.Port />
          </Canvas>
        </div>
        <div className="mx-auto w-full">
          <p className="text-sm md:text-md text-center font-light mb-5">
            {model.title}
          </p>
        </div>
        <div className="flex-center">
          <ul className="color-container">
            {models.map((item, i) => (
              <li
                key={i}
                className="rounded-full w-6 h-6 mx-2 cursor-pointer"
                style={{
                  backgroundColor: item.color[0],
                }}
                onClick={() => setmodel(item)}
              />
            ))}
          </ul>

          <button className="size-btn-container">
            {sizes.map(({ label, value }) => (
              <span
                key={label}
                className="size-btn"
                style={{
                  backgroundColor: size === value ? "white" : "transparent",
                  color: size === value ? "black" : "white",
                }}
                onClick={() => setsize(value)}
              >
                {label}
              </span>
            ))}
          </button>
        </div>
      </div>
    </section>
  );
}
export default model;
