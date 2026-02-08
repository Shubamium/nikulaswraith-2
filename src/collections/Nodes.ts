import { CollectionConfig, Field } from "payload";

export let Node: Field[] = [
  {
    name: "name",
    type: "text",
  },
  {
    name: "type",
    type: "select",
    defaultValue: "Folder",
    options: [
      {
        label: "Folder",
        value: "folder",
      },
      {
        label: "Image",
        value: "image",
      },
      {
        label: "Video",
        value: "video",
      },
    ],
  },
  {
    name: "vid",
    label: "Video ID (Youtube)",
    type: "text",
    admin: {
      condition: (_, sd) => sd.type === "video",
    },
  },
  {
    name: "children",
    label: "Folder Content (File/Folders)",
    type: "relationship",
    relationTo: "nodes",
    hasMany: true,

    admin: {
      condition: (_, sd) => sd.type === "folder",
      appearance: "drawer",
      allowCreate: true,
      allowEdit: true,
    },
  },
  {
    name: "media",
    admin: {
      description:
        "On 'Folder' and 'Video' type this will be used as cover image",
    },
    type: "upload",
    relationTo: "media",
  },
];

export const Nodes: CollectionConfig = {
  slug: "nodes",
  labels: {
    singular: "File/Folder",
    plural: "Files/Folder",
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [...Node],
};
