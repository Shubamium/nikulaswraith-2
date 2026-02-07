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
            <p>Profile</p>
          </Link>
          <Link href={"/models"} className="btn btn-app">
            <BsArrowRight />
            <p>Models & Design</p>
          </Link>
          <Link href={"/highlight"} className="btn btn-app">
            <AiFillPicture />
            <p>Highlight Artworks</p>
          </Link>
          <Link href={"/hardware"} className="btn btn-app">
            <PiGraphicsCardFill />
            <p>System/Hardware</p>
          </Link>
          <Link href={"/contact"} className="btn btn-app">
            <RiSaveFill />
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
