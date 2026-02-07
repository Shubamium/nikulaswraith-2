import WindowLayout from "@/app/components/layout/winLayout/WindowLayout";
import React from "react";

type Props = {};
import "./profile.scss";
import { FaXTwitter } from "react-icons/fa6";
import { GoTriangleLeft } from "react-icons/go";
export default function page({}: Props) {
  return (
    <WindowLayout
      id="p_profile"
      closeRoute="/menu"
      heading={{
        title: "Profile.exe",
        description: "Quick overview on the owner of this device ",
      }}
    >
      <div className="left">
        <div className="bio">
          <h2 className="mtgrad">PROFILE {">>"}</h2>
          <p>
            Hello, I’m Nikulas Wraith. I’m a variety streamer and a Virtual
            Phantom VTuber. My soul was lost many long years ago and then
            mistakenly uploaded to a gaming computer. I live the rest of my life
            inside of here along with a few others you might meet like, Nikki,
            Kid Nik, and even Corrupt Nik.
          </p>

          <div className="support-trailer">
            <div className="support">
              <img src="/g/logo.png" alt="" className="logo" />

              <div className="slist">
                <h2>
                  {" "}
                  {">>"} SUPPORT ME {"<<"}
                </h2>

                <div className="btns">
                  <a href="#" className="btn btn-sup">
                    <img src="/p/kofi-btn.png" alt="" />
                  </a>
                  <a href="#" className="btn btn-sup">
                    <img src="/p/thronebtn.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="trailer">
              <iframe
                src="https://www.youtube.com/embed/aqaVSD_g4p4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="vd"
              ></iframe>

              <div className="socials">
                <a href="#" target="_blank" className="btn btn-ct">
                  <FaXTwitter />
                </a>
                <a href="#" target="_blank" className="btn btn-ct">
                  <FaXTwitter />
                </a>
                <a href="#" target="_blank" className="btn btn-ct">
                  <FaXTwitter />
                </a>
                <a href="#" target="_blank" className="btn btn-ct">
                  <FaXTwitter />
                </a>
                <a href="#" target="_blank" className="btn btn-ct">
                  <FaXTwitter />
                </a>
                <div className="social-head">
                  <p>
                    SOCIAL <br></br> LINK
                  </p>
                  <div className="tri">
                    <GoTriangleLeft />
                    <GoTriangleLeft />
                    <GoTriangleLeft />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="/g/nikhb.png" alt="" className="mainart" />
      </div>
    </WindowLayout>
  );
}
