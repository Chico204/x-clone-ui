import { Image } from "@imagekit/next";
import Imagecontent from "./imagecontent";
import PostInfo from "./PostInfo";

const Post = () => {
  return (
    <div className=" p-4 border-y-[1px ] border-borderGray ">
  {/*POST TYPE*/}
  <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold ">
    icon
    <span>Olatunji Akorede Reposted</span>
  </div>
  {/*POST CONTENT*/}
    <div className="flex gap-4">
        {/*POST IMAGE*/}
        <div className=" relative w-10 h-10 rounded-full overflow-hidden ">
        <Image urlEndpoint="https://ik.imagekit.io/v9wymwzf6/public/general/avatar.png?updatedAt=1754699850233" src="https://ik.imagekit.io/v9wymwzf6/public/general/avatar.png?updatedAt=1754699850233" alt="pro" width={50} height={50} />
        </div>
        {/*POST TEXT*/}
        <div className="flex-1 flex flex-col gap-2">
            {/*TOP*/}
          <div className="flex items-center justify-between gap-2">
             <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-md font-bold">Olatunji Akorede</h1>
                <span className="text-textGray">@olatunjiakorede</span>
                <span className="text-textGray">1 day ago</span>
             </div>
             <PostInfo/>
          </div>
          {/*TEXT & MEDIA*/}
          <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, repellendus esse deserunt perspiciatis eligendi atque architecto. Debitis tenetur assumenda, dolores deleniti cupiditate explicabo animi sit soluta illo ullam atque reprehenderit!</p>
            <Imagecontent />
           
      </div>
    </div>
    </div>
  );
}
export default Post;