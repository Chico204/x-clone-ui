"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PostModal from "./PostModal";
import RightBar from "./RightBar";

export default function LeftBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showRightBar, setShowRightBar] = useState(false);

  return (
    <>
      <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-4">
        <div className="flex flex-col items-center gap-4 text-lg xxl:items-start">
          {/* Logo */}
          <Link href="/" className="p-2 rounded-full hover:bg-[#181818]">
            <Image src="icons/logo.svg" alt="logo" width={24} height={24} />
          </Link>

          {/* Menu Items */}
          <Link href="/" className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4">
            <Image src="icons/home.svg" alt="Homepage" width={24} height={24} />
            <span className="hidden xxl:inline">Homepage</span>
          </Link>

          <div
            onClick={() => setShowRightBar(true)}
            className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4 cursor-pointer"
          >
            <Image src="icons/explore.svg" alt="Explore" width={24} height={24} />
            <span className="hidden xxl:inline">Explore</span>
          </div>

          <Link href="/" className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4">
            <Image src="icons/message.svg" alt="Messages" width={24} height={24} />
            <span className="hidden xxl:inline">Messages</span>
          </Link>

          <Link href="/" className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4">
            <Image src="icons/bookmark.svg" alt="Bookmarks" width={24} height={24} />
            <span className="hidden xxl:inline">Bookmarks</span>
          </Link>

          <Link href="/" className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4">
            <Image src="icons/job.svg" alt="Jobs" width={24} height={24} />
            <span className="hidden xxl:inline">Jobs</span>
          </Link>

          <Link href="/" className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4">
            <Image src="icons/community.svg" alt="Communities" width={24} height={24} />
            <span className="hidden xxl:inline">Communities</span>
          </Link>

          <Link href="/" className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4">
            <Image src="icons/logo.svg" alt="Premium" width={24} height={24} />
            <span className="hidden xxl:inline">Premium</span>
          </Link>

          <Link href="/heisolatunjiakorede" className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4">
            <Image src="icons/profile.svg" alt="Profile" width={24} height={24} />
            <span className="hidden xxl:inline">Profile</span>
          </Link>

          <Link href="/" className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4">
            <Image src="icons/more.svg" alt="More" width={24} height={24} />
            <span className="hidden xxl:inline">More</span>
          </Link>

          {/* Post Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-black rounded-full font-bold w-12 h-12 flex items-center justify-center xxl:hidden"
          >
            <Image src={"icons/post.svg"} alt="post" width={24} height={24} />
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
          >
            Post
          </button>
        </div>

        {/* Profile */}
        <div className="flex items-center justify-between pt-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 relative rounded-full overflow-hidden">
              <Image src="https://ik.imagekit.io/v9wymwzf6/public/general/IMG_2625_zRv0fiMyU.JPG?updatedAt=1754957290695"alt="profile" fill />
            </div>
            <div className="hidden xxl:flex flex-col">
              <span className="font-bold">Olatunji Akorede</span>
              <span className="text-sm text-textGray">@heisolatunjiakorede</span>
            </div>
          </div>
          <div className="hidden xxl:block cursor-pointer font-bold">...</div>
        </div>
      </div>

      {/* Post Modal */}
      {isModalOpen && <PostModal onClose={() => setIsModalOpen(false)} />}

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
