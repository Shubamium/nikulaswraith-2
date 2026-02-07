import { GlobalConfig } from "payload";

export const Profile: GlobalConfig = {
  slug: "profile",
  fields: [
    {
      name: "bio",
      type: "richText",
    },
    {
      name: "trailer",
      label: "Trailer - YT Video ID",
      type: "text",
    },
  ],
};
