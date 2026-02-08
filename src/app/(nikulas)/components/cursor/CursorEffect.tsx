"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {};
import "./cursorEffect.scss";
export default function CursorEffect({}: Props) {
  const [cursorPos, setCursorPos] = useState([0, 0]);
  const spawnRate = 60;
  const lifetime = 0.5;
  const [spawnDelimiter, setSpawnDelimiter] = useState(false);

  const fxHeadRef = useRef<HTMLDivElement>(null);
  function spawnCubeParticle() {
    if (!spawnDelimiter) {
      const spawn = () => {
        const particle = document.createElement("img");
        particle.src = "/d/glassypanel.png";
        particle.classList.add("cursorfx-box");
        particle.style.position = "fixed";

        const randOffsetX = Math.random() * 60 - 35;
        const randOffsetY = Math.random() * 60 - 35;

        const randColor = Math.floor(Math.random() * 2);
        const randRotation = Math.random() * 360;
        const randSize = Math.random() * 1 + 0.2;
        particle.style.left = `${cursorPos[0] + randOffsetX}px`;
        particle.style.top = `${cursorPos[1] + randOffsetY}px`;
        particle.style.scale = `${randSize}`;
        particle.style.transform = `rotate(${randRotation}deg)`;

        if (randColor == 0) {
          particle.style.filter = "hue-rotate(310deg)";
        }
        fxHeadRef.current?.appendChild(particle);

        setTimeout(() => {
          particle.remove();
        }, lifetime * 1000);
        setSpawnDelimiter(true);
        setTimeout(() => {
          setSpawnDelimiter(false);
        }, spawnRate);
      };

      spawn();
      spawn();
    }
  }
  useEffect(() => {
    document.onmousemove = (e) => {
      setCursorPos([e.clientX, e.clientY]);
      console.log(e.clientX, e.clientY);

      spawnCubeParticle();
    };
  });
  return (
    <div className="fx-head" ref={fxHeadRef}>
      CursorEffect
    </div>
  );
}
