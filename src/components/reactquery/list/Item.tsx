import React, {MouseEvent} from "react";
import {IPost} from "../utils";
import {useQueryClient} from "react-query";

interface IProps {
    post: IPost
    // onClick: (p: IPost) => void;
}

const Item: React.FC<IProps> = ({ post }) => {
    const queryClient = useQueryClient();
    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        queryClient.setQueryData('post', post)
    }
    return (
        <div onClick={handleClick}>
            <div>post id : {post.postId}</div>
            <div>user id : {post.userId}</div>
            <div>user name : {post.userName}</div>
        </div>
    )
}

export default Item