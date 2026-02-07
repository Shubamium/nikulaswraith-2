import HighlightLayout from "@/app/(nikulas)/components/layout/higlight/HighlightLayout";
import payloadConfig from "@/payload.config";
import { getPayload } from "payload";
import React from "react";

type Props = {};

export default async function page({}: Props) {
  const p = await getPayload({
    config: await payloadConfig,
  });

  const hl = await p.find({
    collection: "Artwork",
  });

  return (
    <HighlightLayout
      heading={{
        title: "Models&Design.exe",
        description: "Showcasing the design and model of Nik",
      }}
      data={hl.docs}
    ></HighlightLayout>
  );
}
