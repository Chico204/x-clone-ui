"use client";

import Image from "next/image";

export default function PostModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-[#293139a6] flex justify-center items-start pt-12">
      <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max animate-fadeIn">
        {/* TOP */}
        <div className="flex items-center justify-between">
          <div
            className="cursor-pointer text-gray-400 hover:text-white"
            onClick={onClose}
          >
            ✕
          </div>
          <div className="text-iconBlue font-bold">Drafts</div>
        </div>

        {/* CENTER */}
        <div className="py-8 flex gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700"></div>
          <input
            className="flex-1 bg-transparent outline-none text-lg"
            type="text"
            placeholder="What is happening?!"
          />
        </div>

        {/* BOTTOM */}
        <div className="flex items-center justify-between gap-4 flex-wrap border-t border-borderGray pt-4">
          {/* Hardcoded icons */}
          <div className="flex gap-4 flex-wrap">
            <Image
              src="/icons/image.svg"
              alt="Image"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/icons/gif.svg"
              alt="GIF"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/icons/poll.svg"
              alt="Poll"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/icons/emoji.svg"
              alt="Emoji"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/icons/schedule.svg"
              alt="Schedule"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/icons/location.svg"
              alt="Location"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>

          <button className="py-2 px-5 text-black bg-white rounded-full font-bold hover:opacity-90">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
