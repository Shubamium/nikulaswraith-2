import { GlobalConfig } from "payload";

export const Clock: GlobalConfig = {
  slug: "clock",
  fields: [
    {
      name: "next-stream",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
    {
      name: "isActive",
      type: "checkbox",
    },

    {
      name: "credits",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
        },
        {
          name: "role",
          type: "text",
        },
        {
          name: "url",
          type: "text",
        },
      ],
    },
  ],
};
