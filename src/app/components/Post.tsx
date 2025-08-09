import { Image } from "@imagekit/next";
import Imagecontent from "./imagecontent";

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
        <div className="">
            {/*TOP*/}
          <div className="">
             <div className=""></div>
          </div>
      </div>
    </div>
    </div>
  );
}
export default Post;