"use client";

import dynamic from "next/dynamic";
import Calculator from "./calculator";

// Dynamically import Graph with SSR disabled
const Graph = dynamic(() => import("./Graph"), { ssr: false });

export default function ClientWrapper() {
  return (
    <>
      <Calculator />
      <Graph />
    </>
  );
}