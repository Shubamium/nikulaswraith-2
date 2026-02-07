import { CollectionConfig, Field, GlobalConfig } from "payload";
import { hl } from "./Highlights";

export const Artwork: CollectionConfig = {
  slug: "Artwork",
  fields: [...hl],
};
