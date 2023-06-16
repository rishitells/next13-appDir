"use client";

import { Suspense, useState } from "react";

import { DataLoader } from "@/app/page";

export function Collapsible() {
  const [showAwaitedElement, setShowAwaitedElement] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setShowAwaitedElement((prevShow) => !prevShow)}>
          {showAwaitedElement ? "hide" : "show"}
        </button>
      </div>

      <div
        style={{
          border: "1px solid red",
          visibility: showAwaitedElement ? "visible" : "hidden",
        }}
      >
        <Suspense fallback="loading slow thing...">
          <DataLoader />
        </Suspense>
      </div>
    </>
  );
}
