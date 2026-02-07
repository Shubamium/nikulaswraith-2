"use client";
import React, { useState } from "react";

import "./highlightLayout.scss";
import WindowLayout from "../winLayout/WindowLayout";

import { RxTriangleLeft, RxTriangleRight } from "react-icons/rx";
import { Artwork, Highlight, Media } from "@/payload-types";
import { useRouter } from "next/navigation";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type Props = {
  heading: {
    title: string;
    description: string;
  };
  data: any[];
};

export default function HighlightLayout({ heading, data }: Props) {
  const router = useRouter();
  if (!data || data.length == 0) {
    router.push("/");
    return;
  }

  const [p, setP] = useState(0);
  const ah = data[p] as Highlight | Artwork;
  const cm = ah.media as Media;
  const apfp = ah.artistpfp as Media;
  return (
    <WindowLayout closeRoute="/menu" id="hl-layout" heading={heading}>
      <div className="left">
        <div className="display">
          <img src={cm?.url ?? undefined} alt="" className="activeimg" />
        </div>

        <div className="info">
          <div className="title">
            <h3>{ah["image-description"]}</h3>
          </div>
          <div className="controls">
            <div className="pg">
              {/* <div className="btn p act"></div>
              <div className="btn p"></div>
              <div className="btn p"></div> */}
              {data.map((_, i) => {
                return (
                  <button
                    className={`btn p ${p === i ? "act" : ""}`}
                    key={"btnpager-" + i}
                    onClick={() => {
                      setP(i);
                    }}
                  ></button>
                );
              })}
            </div>
            <div className="switcher">
              <button
                className="btn btn-switch"
                onClick={() => {
                  setP(Math.max(p - 1, 0));
                }}
              >
                <RxTriangleLeft />
              </button>
              <p>
                {p + 1}/{data.length}
              </p>
              <button
                className="btn btn-switch"
                onClick={() => {
                  setP(Math.min(data.length - 1, p + 1));
                }}
              >
                <RxTriangleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="panel">
          <div className="source-top">
            {apfp && (
              <img src={apfp?.url ?? undefined} alt="" className="srcpfp" />
            )}
            <div className="sh">
              <h2>{ah["artist-name"]}</h2>
              <p>{ah["role/title"]}</p>
            </div>
            <div className="desc">
              <RichText
                data={ah.description as SerializedEditorState}
              ></RichText>
            </div>
          </div>
          <div className="source-bottom">
            <div className="ctlist">
              {ah.x && (
                <a href={ah.x} target="_blank" className="btn btn-social">
                  <FaXTwitter />
                </a>
              )}
              {ah["other-site"] && (
                <a
                  href={ah["other-site"]}
                  target="_blank"
                  className="btn btn-social"
                >
                  <FaExternalLinkSquareAlt />
                </a>
              )}
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
