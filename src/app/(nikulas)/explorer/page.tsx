import React from "react";
import Explorer from "./Explorer";
import payloadConfig from "../../../payload.config";
import { getPayload } from "payload";

type Props = {
  searchParams: Promise<{
    drive?: string;
    folder?: string;
  }>;
};

export default async function page({ searchParams }: Props) {
  const param = await searchParams;
  const drive = param.drive || "c";

  const driveTarget = {
    c: "SystemStorage",
    d: "MediaArchive",
  };

  const p = await getPayload({
    config: await payloadConfig,
  });

  const system = await p.findGlobal({
    slug: "SystemStorage",
    depth: 2,
  });
  const media = await p.findGlobal({
    slug: "MediaArchive",
    depth: 2,
  });

  const folder = param.folder
    ? await p.findByID({
        collection: "nodes",
        id: param.folder,
        depth: 2,
      })
    : undefined;

  return (
    <Explorer
      system={system}
      media={media}
      drive={drive as "c" | "d"}
      activeFolder={param.folder ? folder : undefined}
    />
  );
}
