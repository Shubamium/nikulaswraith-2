"use client";
import React from "react";
import "./windowLayout.scss";
import Link from "next/link";
import { ImCross } from "react-icons/im";
import { GrMenu } from "react-icons/gr";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [closing, setClosing] = React.useState(false);
  return (
    <main className={`win-layout ${closing && "closing"}`} id={id}>
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
            <Link href={"/menu"} className="btn btn-heading">
              <GrMenu />
            </Link>
            <button
              onClick={() => {
                if (closeRoute) {
                  setClosing(true);
                  setTimeout(() => {
                    router.push(closeRoute);
                  }, 500);
                }
              }}
              className="btn btn-heading"
            >
              <ImCross />
            </button>
          </div>
        </div>
        <div className="content">{children}</div>
      </div>
    </main>
  );
}
