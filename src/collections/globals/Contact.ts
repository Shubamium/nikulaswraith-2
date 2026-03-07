import { GlobalConfig } from "payload";

export const Contact: GlobalConfig = {
  slug: "contact",
  fields: [
    {
      name: "description",
      label: "Description",
      type: "textarea",
    },
    {
      name: "discord",
      label: "Discord Server",
      type: "text",
    },
  ],
};
