import { Image } from "@imagekit/next";
import Imagecontent from "./imagecontent";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";

const Post = () => {
  return (
    <div className=" p-4 border-y-[1px ] border-borderGray ">
  {/*POST TYPE*/}
  <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold ">
   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
  <path fill="currentColor"
    d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
  />
</svg>
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
           <PostInteractions />
      </div>
    </div>
    </div>
  );
}
export default Post;