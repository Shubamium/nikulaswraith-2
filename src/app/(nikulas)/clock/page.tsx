import React from "react";
import "./clock.scss";
type Props = {};

export default function page({}: Props) {
  return (
    <main id={"p_clock"}>
      <div className="l">
        <div className="top">
          <div className="world-clock">
            <div className="info">
              <h2>
                {" "}
                WORLD <br /> CLOCK
              </h2>
              <p>Select a country to view the current time {"▶▶▶"}</p>
            </div>
          </div>
          <div className="map-container"></div>
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
								<div className="icon">
									<Fa
								</div>
							</div>
						</div>
          </div>
          <div className="activetimer"></div>
        </div>
      </div>
      <div className="r">a</div>
    </main>
  );
}
