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
    collection: "highlights",
  });

  return (
    <HighlightLayout
      heading={{
        title: "Highlighted Artworks",
        description: "Showcasing some of best artworks & fanart of nik",
      }}
      data={hl.docs}
    ></HighlightLayout>
  );
}
