import React from "react";

interface PostcardProps {
    title: string;
    description: string;
}

const PostCard: React.FC<PostcardProps> = ({title, description}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}
export default PostCard