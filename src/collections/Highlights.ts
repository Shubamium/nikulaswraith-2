import { CollectionConfig, Field, GlobalConfig } from "payload";

export let hl: Field[] = [
  {
    type: "text",
    name: "artist-name",
  },
  {
    name: "role/title",
    type: "text",
  },
  {
    name: "description",
    label: "Description / Bio",
    type: "richText",
  },
  {
    name: "x",
    type: "text",
  },
  {
    name: "other-site",
    type: "text",
  },
  {
    name: "image-description",
    type: "text",
  },
  {
    name: "media",
    type: "upload",
    relationTo: "media",
  },
  {
    name: "artistpfp",
    label: "Artist PFP",
    type: "upload",
    relationTo: "media",
  },
];
export const Highlights: CollectionConfig = {
  slug: "highlights",
  fields: [...hl],
};
