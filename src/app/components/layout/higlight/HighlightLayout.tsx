"use client";
import React from "react";

import "./highlightLayout.scss";
import WindowLayout from "../winLayout/WindowLayout";
import { FaArrowLeft, FaArrowRight, FaXTwitter } from "react-icons/fa6";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import { IoTriangleSharp } from "react-icons/io5";
import { BsTriangle } from "react-icons/bs";
import { RxTriangleLeft, RxTriangleRight } from "react-icons/rx";

type Props = {
  heading: {
    title: string;
    description: string;
  };
};

export default function HighlightLayout({ heading }: Props) {
  return (
    <WindowLayout closeRoute="/menu" id="hl-layout" heading={heading}>
      <div className="left">
        <div className="display">
          <img src="/g/" alt="" className="activeimg" />
        </div>

        <div className="info">
          <div className="title">
            <h3>Information about this image</h3>
          </div>
          <div className="controls">
            <div className="pg">
              <div className="btn p act"></div>
              <div className="btn p"></div>
              <div className="btn p"></div>
            </div>
            <div className="switcher">
              <button className="btn btn-switch">
                <RxTriangleLeft />
              </button>
              <p>1/4</p>
              <button className="btn btn-switch">
                <RxTriangleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="panel">
          <div className="source-top">
            <img src="/g" alt="" className="srcpfp" />
            <div className="sh">
              <h2>@Artist Name</h2>
              <p>Person Title or Role</p>
            </div>
            <div className="desc">
              <p>
                (Personal note about this person)Hello, I’m Nikulas Wraith. I’m
                a variety streamer and a Virtual Phantom VTuber. My soul was
                lost many long years ago and then mistakenly uploaded to a
                gaming computer. I live the rest of my life inside of here along
                with a few others you might meet like, Nikki, Kid Nik, and even
                Corrupt Nik.
              </p>
            </div>
          </div>
          <div className="source-bottom">
            <div className="ctlist">
              <a href="#" target="_blank" className="btn btn-social">
                <FaXTwitter />
              </a>
              <a href="#" target="_blank" className="btn btn-social">
                <FaXTwitter />
              </a>
            </div>
            <div className="arr">
              <RxTriangleLeft />
              <RxTriangleLeft />
              <RxTriangleLeft />
            </div>
          </div>
        </div>
        <img src="/d/abdzig.svg" alt="" className="abdzig" />
      </div>
    </WindowLayout>
  );
}
