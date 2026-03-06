import React from "react";
import ClockPage from "./ClockPage";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";

type Props = {};

export default async function page({}: Props) {
  const p = await getPayload({
    config: await payloadConfig,
  });
  const clock = await p.findGlobal({
    slug: "clock",
  });

  return <ClockPage cd={clock} />;
}
