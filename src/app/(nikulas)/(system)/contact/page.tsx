"use client";
import React, { useState } from "react";

type Props = {};
import "./contact.scss";
import WindowLayout from "@/app/(nikulas)/components/layout/winLayout/WindowLayout";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaDiscord, FaTwitch } from "react-icons/fa";
import { sendMail } from "../../util/mail";
import { BiLoader } from "react-icons/bi";
export default function page({}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <WindowLayout
      closeRoute="/menu"
      id="p_contact"
      heading={{
        title: "Contact.exe",
        description: "Reach out to the system administrator",
      }}
    >
      <div className={`loading ${loading ? "active" : "inactive"}`}>
        {success ? (
          <>
            <p>Message sent successfully!</p>
          </>
        ) : (
          <>
            <BiLoader />
            <p>Sending message...</p>
          </>
        )}
      </div>

      <div className="ct-head">
        <h2 className="mtgrad">
          {" "}
          CONTACT <span>{">>>>>>>>"}</span>
        </h2>
        <p>
          Contact Placeholder Text Here Hello, I’m Nikulas Wraith. I’m a variety
          streamer and a Virtual Phantom VTuber. My soul was lost many long
          years ago and then mistakenly uploaded to a gaming computer. I live
          the rest of my life inside of here along with a few others you might
          meet like
        </p>
      </div>
      <form
        className="ctform"
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);
          const res = await sendMail(name, email, message);
          setTimeout(() => {
            setSuccess(res);
            setTimeout(() => {
              setLoading(false);
            }, 2000);
          }, 2000);
        }}
      >
        <div className="form-part">
          <div className="ig">
            <div className="input">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Vtuber"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="john.vtuber@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="input ta">
            <label htmlFor="name">Message</label>
            <textarea
              name="name"
              placeholder="Write your messages..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="action">
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
          </div>
          <button type="submit" className="btn btn-submit">
            <span>SEND</span>
          </button>
        </div>
      </form>
    </WindowLayout>
  );
}
