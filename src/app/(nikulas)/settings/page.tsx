"use client";
import Link from "next/link";
import React from "react";

type Props = {};
import "./settings.scss";

export default function page({}: Props) {
  return (
    <main id="p_settings">
      <div className="setting-list">
        <h2 className="title">SETTINGS</h2>
        <div className="list">
          <h2>Volume</h2>
          <div className="slider">
            <input
              type="range"
              min={0}
              max={50}
              onChange={(e) => {
                const volChangeEvent = new CustomEvent("audiochange", {
                  detail: {
                    vol: e.target.valueAsNumber / 100,
                  },
                });
                window.dispatchEvent(volChangeEvent);
              }}
            />
          </div>
        </div>
        <div className="list">
          <h2>Mute Audio</h2>
          <button
            className="btn btn-toggle"
            onClick={() => {
              const event = new CustomEvent("toggleMute");
              window.dispatchEvent(event);
            }}
          >
            MUTE
          </button>
        </div>
        <div className="classic-mode list">
          <h2>Classic Mode</h2>
          <a
            href={"https://classic.nikulaswraith.com"}
            className="btn btn-toggle"
          >
            ACTIVATE
          </a>
        </div>
      </div>
    </main>
  );
}
