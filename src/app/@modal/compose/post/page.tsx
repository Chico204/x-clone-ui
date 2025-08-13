"use client";

import { Image } from "@imagekit/next";

const PostModal =() => {
  return (
    <div className="absolute w-screen h-screen top-0 left-0 z-20 bg-[#293139a6] flex justify-center">
      <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-12">
        {/* TOP */}
        <div className="flex items-center justify-between">
          <div className="cursor-pointer" >
            X
          </div>
          <div className="text-iconBlue font-bold">Drafts</div>
        </div>
        {/* CENTER */}
        <div className="py-8 flex gap-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="https://ik.imagekit.io/v9wymwzf6/public/general/avatar.png?updatedAt=1754699850233"
             urlEndpoint="https://ik.imagekit.io/v9wymwzf6/public/general/avatar.png?updatedAt=1754699850233"
              alt="Lama Dev"
              width={100}
              height={100}
              
            />
          </div>
          <input
            className="flex-1 bg-transparent outline-none text-lg"
            type="text"
            placeholder="What is happening?!"
          />
        </div>
        {/* BOTTOM */}
        <div className=" flex items-center justify-between gap-4 flex-wrap border-t border-borderGray pt-4">
          <div className="flex gap-4 flex-wrap">
            <Image
              src="https://ik.imagekit.io/v9wymwzf6/public/icons/image.svg?updatedAt=1754699845967"
              urlEndpoint="https://ik.imagekit.io/v9wymwzf6/public/icons/image.svg?updatedAt=1754699845967"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="https://ik.imagekit.io/v9wymwzf6/public/icons/gif.svg?updatedAt=1754699845936"
                urlEndpoint="https://ik.imagekit.io/v9wymwzf6/public/icons/gif.svg?updatedAt=1754699845936"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="https://ik.imagekit.io/v9wymwzf6/public/icons/poll.svg?updatedAt=1754699848353"
              urlEndpoint="https://ik.imagekit.io/v9wymwzf6/public/icons/poll.svg?updatedAt=1754699848353"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="https://ik.imagekit.io/v9wymwzf6/public/icons/emoji.svg?updatedAt=1754699843304"
              urlEndpoint="https://ik.imagekit.io/v9wymwzf6/public/icons/emoji.svg?updatedAt=1754699843304"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="https://ik.imagekit.io/v9wymwzf6/public/icons/schedule.svg?updatedAt=1754699849747"
              urlEndpoint="https://ik.imagekit.io/v9wymwzf6/public/icons/schedule.svg?updatedAt=1754699849747"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="https://ik.imagekit.io/v9wymwzf6/public/icons/location.svg?updatedAt=1754699846163"
              urlEndpoint="https://ik.imagekit.io/v9wymwzf6/public/icons/location.svg?updatedAt=1754699846163"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
          <button className="py-2 px-5 text-black bg-white rounded-full font-bold">Post</button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;