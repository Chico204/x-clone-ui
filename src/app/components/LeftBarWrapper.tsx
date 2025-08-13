"use client";

import { useState } from "react";

import RightBar from "./RightBar";

export default function LeftBarWrapper() {
  const [showRightBar, setShowRightBar] = useState(false);

  return (
    <>
      

      {/* Mobile RightBar Overlay */}
      {showRightBar && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black p-4 overflow-y-auto animate-slideIn">
          <button
            onClick={() => setShowRightBar(false)}
            className="mb-4 text-white font-bold"
          >
            Close
          </button>
          <RightBar />
        </div>
      )}
    </>
  );
}
