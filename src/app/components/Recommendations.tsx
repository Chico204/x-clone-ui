import Link from "next/link";
import { Image } from "@imagekit/next";

const Recommendations = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      {/* USER CARD */}
      <div className='flex items-center justify-between'>
        {/* IMAGE AND USER INFO */}
        <div className='flex items-center gap-2'>
          <div className='relative rounded-full overflow-hidden w-10 h-10'>
            <Image src="https://ik.imagekit.io/v9wymwzf6/public/general/IMG_2625_zRv0fiMyU.JPG?updatedAt=1754957290695" urlEndpoint="https://ik.imagekit.io/v9wymwzf6/public/general/IMG_2625_zRv0fiMyU.JPG?updatedAt=1754957290695" alt="John Doe" width={100} height={100} className="object-cover"/>
          </div>
          <div className=''>
            <h1 className="text-md font-bold">Olatunji Akorede</h1>
            <span className="text-textGray text-sm">@olatunjiakorede</span>
          </div>
        </div>
        {/* BUTTON */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">Follow</button>
      </div>
      <div className='flex items-center justify-between'>
        {/* IMAGE AND USER INFO */}
        <div className='flex items-center gap-2'>
          <div className='relative rounded-full overflow-hidden w-10 h-10'>
            <Image src="https://ik.imagekit.io/v9wymwzf6/public/general/IMG_2625_zRv0fiMyU.JPG?updatedAt=1754957290695" urlEndpoint="https://ik.imagekit.io/v9wymwzf6/public/general/IMG_2625_zRv0fiMyU.JPG?updatedAt=1754957290695" alt="John Doe" width={100} height={100} className="object-cover"/>
          </div>
          <div className=''>
            <h1 className="text-md font-bold">Olatunji Akorede</h1>
            <span className="text-textGray text-sm">@olatunjiakorede</span>
          </div>
        </div>
        {/* BUTTON */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">Follow</button>
      </div>
      <div className='flex items-center justify-between'>
        {/* IMAGE AND USER INFO */}
         <div className='flex items-center gap-2'>
          <div className='relative rounded-full overflow-hidden w-10 h-10'>
            <Image src="https://ik.imagekit.io/v9wymwzf6/public/general/IMG_2625_zRv0fiMyU.JPG?updatedAt=1754957290695" urlEndpoint="https://ik.imagekit.io/v9wymwzf6/public/general/IMG_2625_zRv0fiMyU.JPG?updatedAt=1754957290695" alt="John Doe" width={100} height={100} className="object-cover"/>
          </div>
          <div className=''>
            <h1 className="text-md font-bold">Olatunji Akorede</h1>
            <span className="text-textGray text-sm">@olatunjiakorede</span>
          </div>
        </div>
        {/* BUTTON */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">Follow</button>
      </div>
      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};

export default Recommendations;