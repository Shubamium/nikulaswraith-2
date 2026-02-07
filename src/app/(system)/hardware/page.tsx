import WindowLayout from "@/app/components/layout/winLayout/WindowLayout";
import React from "react";

type Props = {};
import "./hardware.scss";
import { GiProcessor, GiRam } from "react-icons/gi";
import { PiGraphicsCardFill } from "react-icons/pi";
import { BsMotherboard, BsMotherboardFill, BsPower } from "react-icons/bs";
import { LuMemoryStick } from "react-icons/lu";
export default function page({}: Props) {
  return (
    <WindowLayout
      id="p_hardware"
      closeRoute={"/"}
      heading={{
        title: "System.exe",
        description: "Hardware Information on the running device",
      }}
    >
      <div className="sys-head">
        <h2 className="mtgrad">{`>> SYSTEM INFORMATION <<`}</h2>
        <p>Want to know what I'm running in my build, give it a check out!</p>
      </div>

      <div className="scl">
        <div className="sys-card">
          <div className="icon">
            <GiProcessor />
          </div>
          <h3>PROCESSOR</h3>
          <p>Intel Core i9 13900 24 Cores 5.20 GHz</p>
        </div>
        <div className="sys-card">
          <div className="icon">
            <PiGraphicsCardFill />
          </div>
          <h3>GRAPHICS</h3>
          <p>Intel Core i9 13900 24 Cores 5.20 GHz</p>
        </div>
        <div className="sys-card">
          <div className="icon">
            <LuMemoryStick />
          </div>
          <h3>RAM</h3>
          <p>Intel Core i9 13900 24 Cores 5.20 GHz</p>
        </div>
        <div className="sys-card">
          <div className="icon">
            <BsPower />
          </div>
          <h3>PSU</h3>
          <p>Intel Core i9 13900 24 Cores 5.20 GHz</p>
        </div>

        <div className="sys-card">
          <div className="icon">
            <BsMotherboardFill />
          </div>
          <h3>Motherboard</h3>
          <p>Intel Core i9 13900 24 Cores 5.20 GHz</p>
        </div>
      </div>

      <div className="os-panel">
        <div className="left">
          <img src="/g/logo.png" alt="" className="logo" />
        </div>
        <div className="right">
          <h3>{`>> OPERATING SYSTEM <<`}</h3>
          <div className="osrun">
            <h2 className="mtgrad">Nikulas Wraith OS Ver.1.14.3</h2>
            <p className="dist">Distro of Windows 11 x64</p>
          </div>
          <div className="cred">
            <p>Code & Developed by</p>
            <a href="https://x.com/shubamium2">SHUBAMIUM</a>
          </div>

          <a
            href="https://x.com/NikulasWraith"
            target="_blank"
            className="btn btn-upd"
          >
            CHECK FOR UPDATE
          </a>
        </div>
      </div>
    </WindowLayout>
  );
}
