import React from "react";
import styled from "@emotion/styled";

import {usePosts} from "./query";
// import example, {a, b} from 'example-lib'
// import * as cha from 'chart.js'

const Frame = styled.div`
    border: 1px solid #999;
`

const QueryApp: React.FC = () => {
    const { data: postQuery, isLoading, error } = usePosts()
    console.log('postQuery:', postQuery)
    if (isLoading) {
        return <div>로딩중입니다..</div>
    }
    if (error) {
        return <div>앗 죄송하지만 서버 에러가 발생했습니다.</div>;
    }
    return(
        <>
            hi
            {
                postQuery?.map(post => (
                    <Frame key={post.postId}>
                        <h3>제목 : {post.title}</h3>
                        <div>작성자: {post.userName}</div>
                    </Frame>
                ))
            }
        </>
    );
}

export default QueryApp