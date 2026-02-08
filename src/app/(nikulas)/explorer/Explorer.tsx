"use client";
import React, { useState } from "react";
import WindowLayout from "../components/layout/winLayout/WindowLayout";

type Props = {};
import "./explorer.scss";
import { FaImages } from "react-icons/fa6";
export default function Explorer({activeFolder}: Props) {
  const [activeDrive, setActiveDrive] = useState<"c" | "d">("c");
  const drive = {
    c: "System Storage",
    d: "Media Archive",
  };

  return (
    <WindowLayout
      closeRoute="/"
      id="p_explorer"
      heading={{
        title: "File Explorer",
        description:
          "File explorer description here browse your file or something....",
      }}
    >
      <div className="drive-list">
        <div className="btn drive act">
          <div className="top">
            <h2 className="dn">{`(${activeDrive}:) ${drive[activeDrive]}`}</h2>
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
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
          </div>
          <p>22.3TB free of 109.0 TB</p>
        </div>
        <div className="btn drive">
          <div className="top">
            <h2 className="dn">{`(D:) Media Archive`}</h2>
            <FaImages />
          </div>
          <p>22.3TB free of 109.0 TB</p>
        </div>
      </div>
      <div className="files-part">
        <div className="fp-head">
          <h2>{`(D:) Drive Name`}</h2>
          <div className="store-bar">
            <div className="bar"></div>
          </div>
          <p>21.49 TB free of 67.3TB NWTFS Storage</p>
        </div>

        <div className="file-list">
          <div className="btn file">
            <div className="folder">
              <img src="/g/nikhb.png" alt="" />
            </div>
            <p className="name">File name</p>
          </div>
          <div className="btn file">
            <div className="folder"></div>
            <p className="name">File name</p>
          </div>
          <div className="btn file">
            <div className="folder"></div>
            <p className="name">File name</p>
          </div>
          <div className="btn file">
            <div className="folder"></div>
            <p className="name">File name</p>
          </div>
          <div className="btn file">
            <div className="folder"></div>
            <p className="name">File name</p>
          </div>
          <div className="btn file">
            <div className="folder"></div>
            <p className="name">File name</p>
          </div>
          <div className="btn file">
            <div className="folder"></div>
            <p className="name">File name</p>
          </div>
          <div className="btn file">
            <div className="folder"></div>
            <p className="name">File name</p>
          </div>
          <div className="btn file">
            <div className="folder"></div>
            <p className="name">File name</p>
          </div>
          <div className="btn file">
            <div className="folder"></div>
            <p className="name">File name</p>
          </div>
          <div className="btn file">
            <div className="folder"></div>
            <p className="name">File name Here testing max file name.jpg</p>
          </div>
        </div>
      </div>
    </WindowLayout>
  );
}
