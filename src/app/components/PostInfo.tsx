import { Image } from "@imagekit/next";
const PostInfo = () => {        
  return (
    <div className="cursor-pointer w-4 h-4 relative">
   <Image src="/icons/more.svg"alt="more" width={16} height={16}/> 
    </div>
  );
}       
export default PostInfo;