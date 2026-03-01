"use client";
import React, { useEffect, useState } from "react";
import { exception, useMap } from "./MapUtil";

type Props = {};
import * as ct from "countries-and-timezones";

// Time Library
import dayjs, { Dayjs } from "dayjs";
import tz from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import duration from "dayjs/plugin/duration";

export default function MapContainer({}: Props) {
  const [selectedCountry] = useMap("worldmap");

  // List of Timezone in the selected country
  const [TimezoneList, setTimezoneList] = useState<string[]>([]);

  // The selected Timezone
  const [activeTz, setActiveTz] = useState<string | null>(null);

  // The data for that country timezone
  const [activeCountryData, setActiveCountryData] = useState<any>();

  useEffect(() => {
    if (selectedCountry) {
      const data = ct.getCountry(selectedCountry);
      console.log(data, selectedCountry);
      setActiveCountryData(data);
      if (data) {
        setTimezoneList(data.timezones);
        setActiveTz(data.timezones[0]);
      }
    }
  }, [selectedCountry]);

  return (
    <>
      <div className="world-clock">
        {!selectedCountry && (
          <div className="info">
            <h2 className="title">
              {" "}
              WORLD <br /> CLOCK
            </h2>
            <p>Select a country to view the current time {"▶▶▶"}</p>
          </div>
        )}

        {selectedCountry && (
          <div className="time-detail">
            <div className="tz-head ">
              <h2 className="title">
                {" "}
                WORLD <br /> CLOCK
              </h2>
              <h2>{activeCountryData?.name?.toUpperCase()}</h2>
            </div>

            <div className="setting confine">
              {TimezoneList.length !== 0 && (
                <>
                  <p>
                    {">>"} Select a location {"<<"}
                  </p>
                  <select
                    name="timezone-sel"
                    id="timezone-sel"
                    onChange={(ev) => {
                      setActiveTz(ev.target.value);
                    }}
                  >
                    {TimezoneList.map((tzs) => {
                      return (
                        <option value={tzs} key={tzs} className="opt">
                          {exception(tzs, selectedCountry || "notavailable")}
                        </option>
                      );
                    })}
                  </select>
                </>
              )}
            </div>
            {activeTz && (
              <div className="selectedTime flight-time confine">
                {/* <SelectedTime
                atz={activeTz}
                streamDate={streamDate}
                show={shouldShowcConnectionLost}
                country={selectedCountry}
              /> */}
                <p>{activeTz}</p>
                <p>{selectedCountry}</p>
              </div>
            )}
          </div>
        )}
      </div>
      <div id="worldmap" className="map-container"></div>
    </>
  );
}
