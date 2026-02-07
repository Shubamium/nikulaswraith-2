import HighlightLayout from "@/app/components/layout/higlight/HighlightLayout";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <HighlightLayout
      heading={{
        title: "Highlighted Artworks",
        description: "Showcasing the design and model of Nik",
      }}
    ></HighlightLayout>
  );
}
