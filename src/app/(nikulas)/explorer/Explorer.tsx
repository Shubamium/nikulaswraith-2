"use client";
import React, { useState } from "react";
import WindowLayout from "../components/layout/winLayout/WindowLayout";

import "./explorer.scss";
import { FaImages } from "react-icons/fa6";
import { Media, MediaArchive, Node, SystemStorage } from "@/payload-types";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  activeFolder?: Node;
  system: SystemStorage;
  media: MediaArchive;
  drive: "c" | "d";
};

export default function Explorer({
  activeFolder,
  system,
  media,
  drive,
}: Props) {
  const router = useRouter();

  // const [activeDrive, setActiveDrive] = useState<"c" | "d">(drive ?? "c");
  const [currentFile, setCurrentFile] = useState<Node | null>(null);
  const [showFile, setShowFile] = useState<boolean>(false);
  const driveText = {
    c: "System Storage",
    d: "Media Archive",
  };

  const switchFolder = (id: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("folder", id);

    router.replace(url.href);
  };
  const root = drive === "c" ? system : media;
  const toDisplay = activeFolder?.children ? activeFolder.children : root.files;

  return (
    <>
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
          {/* Controls */}
          <Link
            href={"/explorer?drive=c"}
            className={`btn drive ${drive === "c" ? "act" : ""}`}
          >
            <div className="top">
              <h2 className="dn">(C:) System Storage </h2>
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
            <p>{system.size} </p>
          </Link>
          <Link
            href={"/explorer?drive=d"}
            className={`btn drive ${drive === "d" ? "act" : ""}`}
          >
            <div className="top">
              <h2 className="dn">{`(D:) Media Archive`} </h2>
              <FaImages />
            </div>
            <p>{media.size}</p>
          </Link>
        </div>

        {/* Files */}
        <div className="files-part">
          <div className="fp-head">
            <h2>{`(${drive}:) ${driveText[drive]}`}</h2>
            <div className="store-bar">
              <div
                className="bar"
                style={{
                  width: `${root.fillPercentage}%`,
                }}
              ></div>
            </div>
            <p>{root.size} - NWTFS Storage</p>
          </div>

          <div className="file-list">
            {toDisplay &&
              (toDisplay as Node[]).map((f: Node, i) => {
                const cover = f.media as Media;
                return (
                  <div
                    className="btn file"
                    key={f.id}
                    onClick={() => {
                      if (f.type === "folder") {
                        switchFolder(f.id);
                      } else {
                        setShowFile(true);
                        setCurrentFile(f);
                      }
                    }}
                  >
                    <div className={`folder ${f.type !== "folder" && "pic"}`}>
                      {cover && (
                        <img
                          src={
                            cover?.sizes?.thumbnail?.url ??
                            cover?.url ??
                            undefined
                          }
                          alt=""
                        />
                      )}
                    </div>
                    <p className="name">{f.name}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </WindowLayout>
      <div
        id="fullscreen-gallery"
        className={`${showFile ? "act" : "closed"}`}
        onClick={() => {
          setShowFile(false);
          setTimeout(() => {
            setCurrentFile(null);
          }, 500);
        }}
      >
        {currentFile && (
          <>
            <div className="fscont">
              {currentFile.type === "image" && (
                <img
                  src={(currentFile.media as Media)?.url ?? undefined}
                  alt=""
                />
              )}
              {currentFile.type === "video" && (
                <iframe
                  src={`https://www.youtube.com/embed/${currentFile.vid}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="vd"
                ></iframe>
              )}
            </div>
            <div className="footer">
              <h2>{currentFile.name}</h2>
              {currentFile.media && (
                <p>{(currentFile.media as Media)?.author}</p>
              )}
              <p className="close">Click anywhere to close</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
