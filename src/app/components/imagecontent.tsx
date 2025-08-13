'use client';
import { Image } from '@imagekit/next';


const Imagecontent = ()=>{
    return (
        <div className=''>
        <Image
      urlEndpoint="https://ik.imagekit.io/v9wymwzf6/public/general/post.jpeg?updatedAt=1754699880174"
      src="https://ik.imagekit.io/v9wymwzf6/public/general/post.jpeg?updatedAt=1754699880174"
      width={500}
      height={500}
      alt="post"
    />
    </div>
    );
    
}
export default Imagecontent;