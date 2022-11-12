import React from "react";
import styled from "@emotion/styled";

import {usePosts} from "./query";
// import example, {a, b} from 'example-lib'
// import * as cha from 'chart.js'

const Frame = styled.div`
    border: 1px solid #999;
`

const QueryApp: React.FC = () => {
    const { data: postQuery } = usePosts()
    console.log('postQuery:', postQuery)

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
    )
}

export default QueryApp