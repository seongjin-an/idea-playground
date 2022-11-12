import React, {MouseEvent, useState} from "react";
import styled from "@emotion/styled";

import {usePost, usePosts} from "./query";
import {IPost} from "./utils";
// import example, {a, b} from 'example-lib'
// import * as cha from 'chart.js'

const Frame = styled.div`
    border: 1px solid #999;
`

const QueryApp: React.FC = () => {
    const { data: postQuery, isLoading, error } = usePosts()
    const [currentData, setCurrentData] = useState<IPost | null>(null)
    const { data: foundQuery, refetch, isLoading: foundQueryLoading, error: foundQueryError } = usePost(currentData?.postId, currentData?.userId)
    // console.log('postQuery:', postQuery)

    if (isLoading) {
        return <div>로딩중입니다..</div>
    }
    if (error) {
        return <div>앗 죄송하지만 서버 에러가 발생했습니다.</div>;
    }


    const handleClick = (post: IPost) => (event: MouseEvent<HTMLDivElement>) => {
        setCurrentData(post)
        // refetch()
    }

    return(
        <>
            { currentData && JSON.stringify(currentData) }
            <br/>
            { foundQuery && JSON.stringify(foundQuery) }
            <br/>
            {
                postQuery?.map(post => (
                    <Frame key={post.postId} onClick={handleClick(post)}>
                        <h3>제목 : {post.title}</h3>
                        <div>작성자: {post.userName}</div>
                    </Frame>
                ))
            }
        </>
    );
}

export default QueryApp