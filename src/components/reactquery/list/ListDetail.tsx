import React, {useState} from "react";
import {usePosts} from "../query";
import Item from "./Item";
import {IPost} from "../utils";
import {useQueryClient} from "react-query";
import Detail from "./Detail";

const ListDetail: React.FC = () => {
    const queryClient = useQueryClient();
    const _post = queryClient.getQueryData('post')
    const { data } = usePosts()
    // const handleClick = (post: IPost) => {
    //     const p = queryClient.setQueryData('post', post)
    //     console.log('handleClick p:', p)
    // }
    return (
        <>
            <p>_post : {JSON.stringify(_post)}</p>
            <div>
                {
                    data?.map((d: IPost) => (
                        <Item key={d.postId} post={d} />
                    ))
                }
            </div>
        </>
    )
}

export default ListDetail