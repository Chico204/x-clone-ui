import { Image } from "@imagekit/next";
const PostInfo = () => {        
  return (
    <div className="cursor-pointer w-4 h-4 relative">
   <Image src="/icons/more.svg" urlEndpoint="https://ik.imagekit.io/v9wymwzf6/public/icons/more.svg?updatedAt=1754699847658" alt="more" width={10} height={10}/> 
    </div>
  );
}       
export default PostInfo;