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
    const { data: postQuery, isLoading, error, isFetching, isFetched } = usePosts()
    const [currentData, setCurrentData] = useState<IPost | null>(null)
    const { data: foundQuery, refetch, isLoading: foundQueryIsLoading, isFetched: foundQueryIsFetched, isFetching: foundQueryIsFetching, error: foundQueryError } = usePost(currentData?.postId, currentData?.userId)
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
            { isLoading ? 'getPosts isLoading true' : 'getPosts isLoading false'}
            <br/>
            { isFetched ? 'getPosts isFetched true' : 'getPosts isFetched false'}
            <br/>
            { isFetching ? 'getPosts isFetching true' : 'getPosts isFetching false'}
            <br/>
            { currentData && JSON.stringify(currentData) }
            <br/>
            { foundQuery && JSON.stringify(foundQuery) }
            <br/>
            { currentData && (foundQueryIsLoading ? 'getPost ' + currentData?.postId + ' isLoading true' : 'getPost ' + currentData?.postId + ' isLoading false') }
            <br/>
            { currentData && (foundQueryIsFetched ? 'getPost ' + currentData?.postId + ' isFetched true' : 'getPost ' + currentData?.postId + ' isFetched false') }
            <br/>
            { currentData && (foundQueryIsFetching ? 'getPost ' + currentData?.postId + ' isFetching true' : 'getPost ' + currentData?.postId + ' isFetching false') }
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