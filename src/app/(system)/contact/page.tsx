import React from "react";

type Props = {};
import "./contact.scss";
import WindowLayout from "@/app/components/layout/winLayout/WindowLayout";
import { FaYoutube } from "react-icons/fa6";
export default function page({}: Props) {
  return (
    <WindowLayout
      closeRoute="/menu"
      id="p_contact"
      heading={{
        title: "Contact.exe",
        description: "Reach out to the system administrator",
      }}
    >
      <div className="ct-head">
        <h2 className="mtgrad"> CONTACT {">>>>>>>>"}</h2>
        <p>
          Contact Placeholder Text Here Hello, I’m Nikulas Wraith. I’m a variety
          streamer and a Virtual Phantom VTuber. My soul was lost many long
          years ago and then mistakenly uploaded to a gaming computer. I live
          the rest of my life inside of here along with a few others you might
          meet like
        </p>
      </div>
      <form action="#" className="ctform">
        <div className="form-part">
          <div className="ig">
            <div className="input">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="John Vtuber" />
            </div>
            <div className="input">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="john.vtuber@gmail.com"
              />
            </div>
          </div>

          <div className="input ta">
            <label htmlFor="name">Message</label>
            <textarea name="name" placeholder="Write your messages..." />
          </div>
        </div>
        <div className="action">
          <div className="socials">
            <a href="#" target="_blank" className="btn btn-ct">
              <FaYoutube />
            </a>
            <a href="#" target="_blank" className="btn btn-ct">
              <FaYoutube />
            </a>
            <a href="#" target="_blank" className="btn btn-ct">
              <FaYoutube />
            </a>
            <a href="#" target="_blank" className="btn btn-ct">
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
