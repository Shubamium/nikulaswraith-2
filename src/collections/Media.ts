import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "author",
      type: "text",
    },
  ],

  upload: {
    formatOptions: {
      format: "webp",
      options: {
        quality: 80,
      },
    },
    imageSizes: [
      {
        name: "thumbnail",
        width: 700,
        height: 700,
        fit: "inside",
        withoutEnlargement: true,
      },
    ],
  },
};
