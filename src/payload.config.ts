import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { s3Storage } from "@payloadcms/storage-s3";
import { Profile } from "./collections/globals/Profile";
import { Highlights } from "./collections/Highlights";
import { Artwork } from "./collections/Models";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Highlights, Artwork, Users, Media],
  globals: [Profile],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || "",
  }),
  sharp,
  plugins: [
    s3Storage({
      bucket: "nikulas-wraith",
      collections: {
        media: {
          disablePayloadAccessControl: true,
        },
      },
      config: {
        endpoint: "https://minio-api.venmiart.com",
        credentials: {
          accessKeyId: process.env.MINIOA ?? "",
          secretAccessKey: process.env.MINIOK ?? " ",
        },
        forcePathStyle: true,
        region: "us-east-1",
      },
    }),
  ],
});
