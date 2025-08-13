import Feed from "../components/Feed";
import { Image } from "@imagekit/next";
import Link from "next/link";

export default function UserPage() {
  return (
    <div>
      {/* PROFILE TITLE */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href="/">
          <Image src="/icons/back.svg" alt="back" width={24} height={24} />
        </Link>
        <h1 className="font-bold text-lg"> Olatunji Akorede</h1>
      </div>

      {/* INFO */}
      <div>
        {/* COVER & AVATAR */}
        <div className="relative w-full">
          {/* COVER */}
          <div className="w-full aspect-[3/1] relative">
            <Image
              src="/general/d8mjv85da1r61.jpg"
              alt="Cover"
              fill
              className="object-cover"
            />
          </div>

          {/* AVATAR */}
          <div className="w-1/5 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2">
            <Image
             src="https://ik.imagekit.io/v9wymwzf6/public/general/IMG_2625_wHHKU7wb3.JPG?updatedAt=1755096731324"
              alt="Avatar"
              width={100}
              height={100}
              className="object-cover"/>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex w-full items-center justify-end gap-2 p-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 cursor-pointer">
            <Image src="/icons/more.svg" alt="More" width={20} height={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 cursor-pointer">
            <Image src="/icons/explore.svg" alt="Explore" width={20} height={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 cursor-pointer">
            <Image src="/icons/message.svg" alt="Message" width={20} height={20} />
          </div>
          <button className="py-2 px-4 bg-white text-black font-bold rounded-full">
            Follow
          </button>
        </div>

        {/* USER DETAILS */}
        <div className="p-4 flex flex-col gap-2">
          {/* USERNAME & HANDLE */}
          <div>
            <h1 className="text-2xl font-bold">Olatunji Akorede</h1>
            <span className="text-textGray text-sm">@heisolatunjiakorede</span>
          </div>

        

          {/* LOCATION & JOIN DATE */}
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2">
              <Image src="/icons/userLocation.svg" alt="location" width={20} height={20} />
              <span>Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="https://ik.imagekit.io/v9wymwzf6/public/icons/date.svg?updatedAt=1754699844278" alt="date" width={20} height={20} />
              <span>Joined February 2024</span>
            </div>
          </div>

          {/* FOLLOWERS & FOLLOWINGS */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">400</span>
              <span className="text-textGray text-[15px]">Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">Following</span>
            </div>
          </div>
        </div>
      </div>

      {/* FEED */}
      <Feed />
    </div>
  );
}
