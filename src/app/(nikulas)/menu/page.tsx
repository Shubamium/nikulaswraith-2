import Link from "next/link";
import { AiFillPicture } from "react-icons/ai";
import { BiSave } from "react-icons/bi";
import {
  BsArrowRight,
  BsFillSaveFill,
  BsPerson,
  BsPersonFill,
  BsSaveFill,
} from "react-icons/bs";
import { FcPicture } from "react-icons/fc";
import {
  PiGraphicsCard,
  PiGraphicsCardBold,
  PiGraphicsCardFill,
} from "react-icons/pi";

type Props = {};

import "./menu.scss";
import { RiSaveFill } from "react-icons/ri";
export default function Menu({}: Props) {
  return (
    <main id="p_menu">
      <div className="panel">
        <h2 className="mtgrad">
          {">>"} SYSTEM APPS {"<<"}
        </h2>

        <div className="apps-li">
          <Link href={"/profile"} className="btn btn-app">
            <BsPersonFill />
            <span>Profile</span>
          </Link>
          <Link href={"/models"} className="btn btn-app">
            <BsArrowRight />
            <span>Models & Design</span>
          </Link>
          <Link href={"/highlight"} className="btn btn-app">
            <AiFillPicture />
            <span>Highlight Artworks</span>
          </Link>
          <Link href={"/hardware"} className="btn btn-app">
            <PiGraphicsCardFill />
            <span>System / Hardware</span>
          </Link>
          <Link href={"/contact"} className="btn btn-app">
            <RiSaveFill />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
