"use client";
import React, { useEffect, useState } from "react";
import "./clock.scss";
type Props = {};
import { FaWifi } from "react-icons/fa";
import MapContainer from "./MapContainer";
import {
  dateFormat,
  TimeFormat,
  timeFormatS,
  useTime,
  useWorldClock,
} from "./ClockUtil";
import dayjs, { Dayjs } from "dayjs";

import tz from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import duration from "dayjs/plugin/duration";
dayjs.extend(tz);
dayjs.extend(utc);
dayjs.extend(duration);

export default function page({}: Props) {
  const [mounted, setMounted] = useState(false);
  const currentTime = useTime();
  const wm = useWorldClock();
  const [nwSpeed, setnwSpeed] = useState("");
  useEffect(() => {
    setMounted(true);
    setInterval(() => {
      setnwSpeed((Math.random() * 15).toFixed(1));
    }, 100);
  }, []);

  return (
    <main id={"p_clock"}>
      <div className="l">
        <div className="top">
          <MapContainer />
          <div className="credits cpanel">
            <div className="head">
              <h2>CREDITS</h2>
            </div>

            <div className="credits">
              <div className="list">
                <h3>Models</h3>
                <p>Person Name</p>
              </div>
              <div className="list">
                <h3>Models</h3>
                <p>Person Name</p>
              </div>
              <div className="list">
                <h3>Models</h3>
                <p>Person Name</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="live-part">
            <div className="streampart">
              <div className="twitch-embed-container">
                <iframe
                  src={`https://player.twitch.tv/?channel=nikulaswraith&parent=${process.env.NEXT_PUBLIC_TWITCH_HOST}&autoplay=false&muted=false&time=0s`}
                  width="100%"
                  height="100%"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="connection">
              <div className="connection-indicator">
                <div className="btn icon">
                  <FaWifi />
                </div>
                <div className="conn-info">
                  <p className="nn">NW Network</p>
                  <p>Connected - {nwSpeed}GB/s</p>
                </div>
              </div>
              <div className="title">
                <h2>LIVE VIEW◉</h2>
                <p> Check out Nikulas Wraith LIVE above!</p>
              </div>
            </div>
          </div>
          <div className="activetimer">
            <div className="timer">
              <div className="at">
                <h2>Your Current Time:</h2>
                <p>{currentTime?.format(timeFormatS)}</p>
              </div>
              <div className="dates">
                <p>
                  {currentTime?.format(dateFormat)} - {dayjs.tz.guess()}
                </p>
              </div>
            </div>
            <div className="center-line">
              <img src="/d/concave.png" alt="" />
            </div>
            <div className="timer">
              <div className="at">
                <h2>Time Until Next Stream:</h2>
                <p>{"TBA"}</p>
              </div>
              <div className="dates">
                {/* <h2>Central US:</h2>
                <p>23:02 PM - 12 January 2026</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="r">
        <div className="timelist cpanel">
          <div className="head">
            <h2>Country</h2>
          </div>

          <div className="content">
            {mounted && (
              <>
                <TimeCard tm={wm.japanCR} text={"Japan"} />
                <TimeCard tm={wm.pacificCR} text={"Pacific"} />
                <TimeCard tm={wm.centralCR} text={"Central US"} />
                <TimeCard tm={wm.londonCR} text={"London"} />
                <TimeCard tm={wm.germanyCR} text={"Germany"} />
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function TimeCard({ tm, text }: { tm: Dayjs | undefined; text: string }) {
  return (
    <div className="time-card btn">
      <div className="info">
        <h2>{tm?.format(TimeFormat.timeFormatS)}</h2>
        <p>{text}</p>
      </div>
      <div className="date">
        <p>{tm?.format(dateFormat)}</p>
      </div>
    </div>
  );
}
