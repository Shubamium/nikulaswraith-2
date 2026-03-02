import { useEffect, useState } from "react";

// Time Library
import dayjs, { Dayjs } from "dayjs";

const streamDateFormat = "HH:mm A - DD MMMM YYYY";
const dateFormat = "DD MMMM YYYY";
const timeFormat = "hh:mm A ";
const timeFormatS = "hh:mm:ss A ";

export enum TimeFormat {
  streamDateFormat = "HH:mm A - DD MMMM YYYY",
  dateFormat = "DD MMMM YYYY",
  timeFormat = "hh:mm A ",
  timeFormatS = "hh:mm:ss A ",
}
export function useTime(atz?: string) {
  const [thisCt, setThisCt] = useState<dayjs.Dayjs>(
    atz ? dayjs().tz(atz) : dayjs(),
  );

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // const thisCt_StreamTime = streamDate.tz(atz);
  useEffect(() => {
    if (typeof window === "undefined") return;

    const refreshTime = () => {
      setThisCt(atz ? dayjs().tz(atz) : dayjs());
    };
    refreshTime();
    const id = setInterval(refreshTime, 1000);
    return () => {
      window.clearInterval(id);
    };
  }, [atz]);
  if (!mounted) return null;

  return thisCt;
}

export function useWorldClock() {
  const [mounted, setMounted] = useState(false);
  const [londonCR, setLondonCR] = useState(dayjs());
  const [germanyCR, setGermanyCR] = useState(dayjs());
  const [centralCR, setCentralCR] = useState(dayjs());
  const [japanCR, setJapanCR] = useState(dayjs());
  const [pacificCR, setPacificCR] = useState(dayjs());

  useEffect(() => {
    // setMounted(true);

    setInterval(() => {
      setLondonCR(dayjs().tz("Europe/London"));
      setGermanyCR(dayjs().tz("Europe/Berlin"));
      setCentralCR(dayjs().tz("America/Chicago"));
      setJapanCR(dayjs().tz("Asia/Tokyo"));
      setPacificCR(dayjs().tz("America/Los_Angeles"));
    }, 1000);
  }, []);

  return { londonCR, germanyCR, centralCR, japanCR, pacificCR };
}
export { streamDateFormat, dateFormat, timeFormat, timeFormatS };

export default {};
