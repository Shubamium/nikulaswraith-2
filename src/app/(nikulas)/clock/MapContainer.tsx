import React from "react";

type Props = {};

export default function MapContainer({}: Props) {
  return (
    <>
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
    </>
  );
}
