import React, {MouseEvent} from "react";
import {useQueryClient} from "react-query";
import {IPost} from "../utils";


const Detail: React.FC = ({  }) => {
    const queryClient = useQueryClient()
    const _post = queryClient.getQueryData<IPost>('post');
    console.log('Detail _post:', _post)
    const handleClick = (event: MouseEvent) => {
        console.log('뒤로가기버튼')
        // queryClient.invalidateQueries('post')
        queryClient.setQueryData('post', p => undefined)
    }
    return(
        <div>
            <div>post id : {_post?.postId}</div>
            <div>user id : {_post?.userId}</div>
            <div>user name : {_post?.userName}</div>
            <button onClick={handleClick}>뒤로가기</button>
        </div>
    )
}

export default Detail