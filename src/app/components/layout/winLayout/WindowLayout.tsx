import React from "react";
import "./windowLayout.scss";
import Link from "next/link";
import { ImCross } from "react-icons/im";
import { GrMenu } from "react-icons/gr";

type Props = {
  id: string;
  closeRoute: string;
  children?: React.ReactNode;
  heading?: {
    title?: string;
    description?: string;
  };
};

export default function WindowLayout({
  id,
  closeRoute,
  children,
  heading,
}: Props) {
  return (
    <main className="win-layout" id={id}>
      <div className="window">
        <div className="heading">
          <div className="left">
            <h2>{heading?.title}</h2>
            <hr />
            <p>{heading?.description}</p>
          </div>
          <div className="right">
            <div className="btn-heading wordmark">
              <p>NIKULAS WRAITH</p>
            </div>
            <Link href={"#"} className="btn btn-heading">
              <GrMenu />
            </Link>
            <Link href={closeRoute} className="btn btn-heading">
              <ImCross />
            </Link>
          </div>
        </div>
        <div className="content">{children}</div>
      </div>
    </main>
  );
}
