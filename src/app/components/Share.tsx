"use client";

import { Image } from "@imagekit/next";
import { useState } from "react";
const Share = () => {
   const [media, setMedia] = useState<File | null>(null);

   const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
      if(e.target.files && e.target.files[0]){
        setMedia(e.target.files[0]);
      }
   }

  return (
    <form className=" p-4 flex gap-4">
       {/*AVATAR */}
       <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
            src="https://ik.imagekit.io/v9wymwzf6/public/general/avatar.png?updatedAt=1754699850233"
            urlEndpoint="https://ik.imagekit.io/v9wymwzf6/public/general/avatar.png?updatedAt=1754699850233"
            alt="avatar"
            width={100}
            height={100}
            
            />
       </div>
       {/*others*/}
       <div className="flex-1 flex flex-col gap-4">
        <input type="text" placeholder="what is happening?!" className="bg-transparent outline-none placeholder:text-textGray text-xl" />
        <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex gap-4 flex-wrap">
                <input type="file" onChange={handleMediaChange} className="hidden" id="file"/>
                <label htmlFor="file">
                <Image
            src="https://ik.imagekit.io/v9wymwzf6/public/icons/image.svg?updatedAt=1754699845967"
            urlEndpoint="https://ik.imagekit.io/v9wymwzf6/public/icons/image.svg?updatedAt=1754699845967"
            alt="avatar"
            width={20}
            height={20}
            className="cursor-pointer"
            /></label>
           <Image
            src="https://ik.imagekit.io/v9wymwzf6/public/icons/gif.svg?updatedAt=1754699845936"
            urlEndpoint="https://ik.imagekit.io/v9wymwzf6/public/icons/gif.svg?updatedAt=1754699845936"
            alt="avatar"
            width={20}
            height={20}
            className="cursor-pointer"
            />
              <Image
            src="https://ik.imagekit.io/v9wymwzf6/public/icons/poll.svg?updatedAt=1754699848353"
            urlEndpoint="https://ik.imagekit.io/v9wymwzf6/public/icons/poll.svg?updatedAt=1754699848353"
            alt="avatar"
            width={20}
            height={20}
            className="cursor-pointer"
            />
              <Image
            src="https://ik.imagekit.io/v9wymwzf6/public/icons/emoji.svg?updatedAt=1754699843304"
            urlEndpoint="https://ik.imagekit.io/v9wymwzf6/public/icons/emoji.svg?updatedAt=1754699843304"
            alt="avatar"
            width={20}
            height={20}
            className="cursor-pointer"
            />
               <Image
            src="https://ik.imagekit.io/v9wymwzf6/public/icons/location.svg?updatedAt=1754699843304"
            urlEndpoint="https://ik.imagekit.io/v9wymwzf6/public/icons/location.svg?updatedAt=1754699843304"
            alt="avatar"
            width={20}
            height={20}
            className="cursor-pointer"
            />
            </div>
            <button className="bg-white text-black font-bold rounded-full py-2 px-4 ">Post</button>
        </div>
       </div>
    </form>
  );
}   
export default Share  ;