import React from "react";
import PostCard from "@/components/common/PostCard";

const PostsPage: React.FC = () => {
    return (
        <div>
            <h1>Posts</h1>
            <PostCard title='First Card' description="This is the first card" />
        </div>
    )
}
export default PostsPage