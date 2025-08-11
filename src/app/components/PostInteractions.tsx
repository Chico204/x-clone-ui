const PostInteractions = () => {
    return (
        <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-1">
            <img src="/icons/like.svg" alt="Like" className="w-5 h-5" />
            <span>Like</span>
        </button>
        <button className="flex items-center space-x-1">
            <img src="/icons/comment.svg" alt="Comment" className="w-5 h-5" />
            <span>Comment</span>
        </button>
        <button className="flex items-center space-x-1">
            <img src="/icons/share.svg" alt="Share" className="w-5 h-5" />
            <span>Share</span>
        </button>
        </div>
    );
    }
export default PostInteractions;               
