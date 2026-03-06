import React, { Suspense } from "react";
import Header from "./Header";

type Props = {};

export default function HeaderWrapper({}: Props) {
  return (
    <Suspense fallback={<></>}>
      <Header />
    </Suspense>
  );
}
