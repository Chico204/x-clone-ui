'use client';
import { Image } from '@imagekit/next';
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
const Homepage = () => {
  return (
    <div className=''>
        <Image
      urlEndpoint={urlEndpoint}
      src="https://ik.imagekit.io/v9wymwzf6/public/general/post.jpeg?updatedAt=1754699880174"
      width={500}
      height={500}
      alt="post"
    />
    </div>
  )
}

export default Homepage