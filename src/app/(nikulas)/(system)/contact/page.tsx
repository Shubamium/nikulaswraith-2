import React from "react";
import ContactPage from "./ContactPage";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";

type Props = {};

export default async function page({}: Props) {
  const p = await getPayload({
    config: await payloadConfig,
  });

  const cd = await p.findGlobal({
    slug: "contact",
  });

  return <ContactPage cd={cd} />;
}
