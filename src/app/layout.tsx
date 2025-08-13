import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akorede X Clone",
  description: "Next.js social media application project",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between">
          {/* LEFT BAR */}
          <div className="px-2 xsm:px-4 xxl:px-8">
            <LeftBar />
          </div>

          {/* MAIN CONTENT */}
          <div className="flex-1 lg:min-w-[600px] border-x border-borderGray">
            {children}
            {modal}
          </div>

          {/* RIGHT BAR DESKTOP */}
          <div className="hidden lg:flex ml-4 md:ml-8 flex-1">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
