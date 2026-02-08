import { CollectionConfig, Field, GlobalConfig } from "payload";

export const SystemStorage: GlobalConfig = {
  slug: "SystemStorage",
  fields: [
    {
      name: "size",
      type: "text",
      required: true,
    },
    {
      name: "fillPercentage",
      admin: {
        description: "The fill percentage of the storage 0-100%",
      },
      type: "number",
      required: true,
    },
    {
      name: "files",
      type: "relationship",
      relationTo: "nodes",
      hasMany: true,
      admin: {
        appearance: "drawer",
      },
      required: true,
    },
  ],
};
