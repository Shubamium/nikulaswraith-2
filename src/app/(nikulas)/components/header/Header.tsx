"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

import "./header.scss";
import Link from "next/link";
import { MdFolder, MdPerson, MdPerson2, MdPerson3 } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import { BiSolidCog, BiVolumeFull } from "react-icons/bi";
import { IoMdPerson } from "react-icons/io";
import dayjs from "dayjs";
import { clearInterval } from "timers";
// Windows Navigation  Bar Fixed
export default function Header({}: Props) {
  const [currentTime, setCurrentTime] = useState(dayjs());

  const [settingBarOpen, setSettingBarOpen] = useState(false);

  // Audio=======
  const audioRef = useRef<HTMLAudioElement>(null);
  const [vol, setVol] = useState(0.3);
  const [muted, setMuted] = useState(false);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  }, [vol]);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted;
    }
  }, [muted]);
  useEffect(() => {
    const exit = setInterval(() => {
      const now = dayjs();
      setCurrentTime(now);
    }, 60 * 1000);

    if (audioRef.current) {
      audioRef.current.volume = vol;
      audioRef.current.play();
    }

    document.addEventListener("click", () => {
      if (audioRef.current?.paused) {
        audioRef.current.play();
      }
    });
    return () => {
      clearInterval(exit);
    };
  }, []);
  return (
    <>
      <header id="header">
        <audio src="/a/bm.mp3" ref={audioRef} loop></audio>
        <div className="left">
          <Link href="/" className="logo btn">
            <img src="/g/logo.png" alt="" />
          </Link>
          <div className="taskbar-apps">
            <Link href={"/menu"} className="btn btn-nav sd">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.6328 28.6035C19.1092 31.0401 21.7057 32.8748 24.8213 33.5781L24.8213 50.0606L0.70899 50.0605L0.708994 30.7939L17.6328 28.6035Z"
                  fill="currentColor"
                />
                <path
                  d="M55.3174 27.6729L38.8672 27.6729C38.2019 23.9564 35.1907 20.9244 31.2041 19.7754L31.2041 8.40625L55.3174 5.28516L55.3174 27.6729Z"
                  fill="currentColor"
                />
                <path
                  d="M24.8213 14.3047C20.6008 15.2574 17.3337 18.2871 16.5137 22.0762L5.92602e-06 22.0762L9.78594e-06 0L24.8213 4.33989e-06L24.8213 14.3047Z"
                  fill="currentColor"
                />
                <path
                  d="M30.8491 41.6645C35.0697 40.7118 38.3369 37.6822 39.1568 33.8931L55.6704 33.8931L55.6704 55.9692L30.8491 55.9692L30.8491 41.6645Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link href={"/profile"} className="btn btn-nav">
              <IoMdPerson />
            </Link>
            <Link href={"/explorer"} className="btn btn-nav">
              <MdFolder />
            </Link>
            <Link href={"/explorer?drive=gallery"} className="btn btn-nav">
              <AiFillPicture />
            </Link>
          </div>
        </div>
        <img src="/d/decal.svg" alt="" className="decal" />
        <div className="right">
          <a href="https://classic.nikulaswraith.com" className="btn btn-class">
            {" "}
            Classic Mode <img src="/d/styart.png" alt="" />
          </a>
          <div className="time btn">
            <div className="side"></div>
            <div className="time-part">
              <p>{currentTime.format("hh:mm A")}</p>
            </div>
          </div>
          <Link href={"/clock"} className="btn btn-navside">
            <svg
              width="25"
              height="28"
              viewBox="0 0 25 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3636 9.27273H13.9091V7.72727H12.3636M9.27273 12.3636H10.8182V10.8182H12.3636V9.27273H10.8182V7.72727H9.27273V6.18182H10.8182V7.72727H12.3636V6.18182H13.9091V7.72727H15.4545V9.27273H17V7.72727H18.5455V4.63636H20.0909V3.09091H4.63636V4.63636H6.18182V6.18182H7.72727V9.27273H9.27273M10.8182 13.9091H12.3636V12.3636H10.8182M12.3636 15.4545H13.9091V13.9091H12.3636M24.7273 27.8182H0V23.1818H1.54545V21.6364H3.09091V18.5455H4.63636V15.4545H6.18182V12.3636H4.63636V9.27273H3.09091V6.18182H1.54545V4.63636H0V0H24.7273V4.63636H23.1818V6.18182H21.6364V9.27273H20.0909V12.3636H18.5455V15.4545H20.0909V18.5455H21.6364V21.6364H23.1818V23.1818H24.7273M15.4545 12.3636V9.27273H13.9091V10.8182H12.3636V12.3636M20.0909 24.7273V23.1818H18.5455V20.0909H17V17H15.4545V15.4545H13.9091V18.5455H15.4545V21.6364H17V23.1818H7.72727V21.6364H9.27273V18.5455H10.8182V17H12.3636V15.4545H9.27273V17H7.72727V20.0909H6.18182V23.1818H4.63636V24.7273H20.0909Z"
                fill="currentColor"
              />
            </svg>
          </Link>
          <button
            className="btn btn-navside"
            onClick={() => {
              setSettingBarOpen(!settingBarOpen);
            }}
          >
            <BiSolidCog />
          </button>
        </div>

        <img src="/d/glassypanel.png" alt="" className="decor_pane" />
        <img src="/d/glassypanel.png" alt="" className="decor_pane a" />
        <img src="/d/glassypanel.png" alt="" className="decor_pane b " />
      </header>
      <div className={`audio-panel ${settingBarOpen ? "open" : "close"}`}>
        <button
          className={`btn btn-mute ${muted ? "mute" : ""}`}
          onClick={() => {
            setMuted(!muted);
          }}
        >
          <p>MUTE</p>
        </button>

        <input
          type="range"
          min={0}
          value={vol * 100}
          max={50}
          className="vertical-audio"
          onChange={(e) => {
            setVol(e.target.valueAsNumber / 100);
          }}
        />
        <div className="icon-top">
          <BiVolumeFull />
        </div>
      </div>
    </>
  );
}
