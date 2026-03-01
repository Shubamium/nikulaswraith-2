import React from "react";
import "./clock.scss";
type Props = {};
import { FaWifi } from "react-icons/fa";
import MapContainer from "./MapContainer";

export default function page({}: Props) {
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
                  src="https://player.twitch.tv/?channel=nikulaswraith&parent=nikulaswraith.com&autoplay=false&muted=false&time=0s"
                  width="100%"
                  height="100%"
                  frameBorder="0"
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
                  <p>Connected - 14.7GB/s</p>
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
                <p>10:46:13 PM</p>
              </div>
              <div className="dates">
                <p>Jan 12, 2026 10:46:54 PM Asia/Bangkok</p>
              </div>
            </div>
            <div className="center-line"></div>
            <div className="timer">
              <div className="at">
                <h2>Your Current Time:</h2>
                <p>10:46:13 PM</p>
              </div>
              <div className="dates">
                <h2>Central US:</h2>
                <p>23:02 PM - 12 January 2026</p>
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
            <div className="time-card btn">
              <div className="info">
                <h2>12:56:32 PM</h2>
                <p>COUNTRY </p>
              </div>
              <div className="date">
                <p>12 January 2026</p>
              </div>
            </div>
            <div className="time-card btn">
              <div className="info">
                <h2>12:56:32 PM</h2>
                <p>COUNTRY </p>
              </div>
              <div className="date">
                <p>12 January 2026</p>
              </div>
            </div>
            <div className="time-card btn">
              <div className="info">
                <h2>12:56:32 PM</h2>
                <p>COUNTRY </p>
              </div>
              <div className="date">
                <p>12 January 2026</p>
              </div>
            </div>
            <div className="time-card btn">
              <div className="info">
                <h2>12:56:32 PM</h2>
                <p>COUNTRY </p>
              </div>
              <div className="date">
                <p>12 January 2026</p>
              </div>
            </div>
            <div className="time-card btn">
              <div className="info">
                <h2>12:56:32 PM</h2>
                <p>COUNTRY </p>
              </div>
              <div className="date">
                <p>12 January 2026</p>
              </div>
            </div>
            <div className="time-card btn">
              <div className="info">
                <h2>12:56:32 PM</h2>
                <p>COUNTRY </p>
              </div>
              <div className="date">
                <p>12 January 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
