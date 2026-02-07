import WindowLayout from "@/app/(nikulas)/components/layout/winLayout/WindowLayout";
import React from "react";

type Props = {};
import "./profile.scss";
import { FaXTwitter } from "react-icons/fa6";
import { GoTriangleLeft } from "react-icons/go";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import {
  FaDiscord,
  FaTwitch,
  FaYoutube,
  FaYoutubeSquare,
} from "react-icons/fa";
export default async function page({}: Props) {
  const p = await getPayload({
    config: await payloadConfig,
  });

  const pd = await p.findGlobal({
    slug: "profile",
  });

  return (
    <WindowLayout
      id="p_profile"
      closeRoute="/menu"
      heading={{
        title: "Profile.exe",
        description: "Quick overview on the owner of this device ",
      }}
    >
      <div className="left">
        <div className="bio">
          <h2 className="mtgrad">PROFILE {">>"}</h2>
          <div className="biotext">
            <RichText data={pd.bio as SerializedEditorState}></RichText>
          </div>

          <div className="support-trailer">
            <div className="support">
              <img src="/g/logo.png" alt="" className="logo" />

              <div className="slist">
                <h2>
                  {" "}
                  {">>"} SUPPORT ME {"<<"}
                </h2>

                <div className="btns">
                  <a
                    href="https://ko-fi.com/nikulaswraith"
                    target="_blank"
                    className="btn btn-sup"
                  >
                    <img src="/p/kofi-btn.png" alt="" />
                  </a>
                  <a
                    href="https://throne.com/nikulaswraith"
                    className="btn btn-sup"
                  >
                    <img src="/p/thronebtn.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="trailer">
              <iframe
                src={`https://www.youtube.com/embed/${pd.trailer}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="vd"
              ></iframe>

              <div className="socials">
                <a
                  href="https://discord.com/invite/xPBEdgF5Zp"
                  target="_blank"
                  className="btn btn-ct"
                >
                  <FaDiscord />
                </a>
                <a
                  href="https://x.com/NikulasWraith"
                  target="_blank"
                  className="btn btn-ct"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.twitch.tv/nikulaswraith"
                  target="_blank"
                  className="btn btn-ct"
                >
                  <FaTwitch />
                </a>
                <a
                  href="https://www.youtube.com/@nikulaswraith"
                  target="_blank"
                  className="btn btn-ct"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.youtube.com/@nikulaswraithextra"
                  target="_blank"
                  className="btn btn-ct"
                >
                  <FaYoutubeSquare />
                </a>
                <div className="social-head">
                  <p>
                    SOCIAL <br></br> LINK
                  </p>
                  <div className="tri">
                    <GoTriangleLeft />
                    <GoTriangleLeft />
                    <GoTriangleLeft />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="/g/nikhb.png" alt="" className="mainart" />
      </div>
    </WindowLayout>
  );
}
