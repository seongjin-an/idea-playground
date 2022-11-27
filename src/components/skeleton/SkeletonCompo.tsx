import React, {useEffect, useState, Suspense} from "react";
import styled from "@emotion/styled";
import {IPost} from "../reactquery/utils";
import {usePosts} from "../reactquery/query";
import Skeleton from "./Skeleton";


const Wrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 40vh;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 12px;
  row-gap: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  //box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  border-radius: 4px;
  width: 20vw;
  height: 30vh;
`;
const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
`;
const Placeholder: React.FC = () => {
    return <Container>
        <Skeleton rounded />
    </Container>
}

const Post= styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`

const Item: React.FC<{post: IPost}> = ({ post})=> {
    return(
        <Container>
            <Post>
                <div>postId: {post.postId}</div>
                <div>userId: {post.userId}</div>
                <div>userName: {post.userName}</div>
                <div>title: {post.title}</div>
                <div>content: {post.content}</div>
                <div>star: {post.star}</div>
            </Post>
        </Container>
    )
}

// SkeletonCompo 컴포넌트와 ListSuspense 컴포넌트를 비교해보자
// 비교할 때 index.tsx suspense: false true 조정해야함.
const SkeletonCompo: React.FC = () => {
    const [list, setList] = useState<IPost[]>([])

    const { data: postData, isLoading } = usePosts();
    console.log('data:', postData)
    console.log('isLoading:', isLoading)

    useEffect(() => {
        if (postData) {
            setList(postData)
        }
    }, [postData])

    if (isLoading) {
        return <Wrapper>
            {
                Array(25).fill(0).map((_, index) => (
                    <Placeholder key={index} />
                ))
            }
        </Wrapper>
    }

    return(
        <Wrapper>
            {
                postData?.map((post, index) => (<Item key={index} post={post} />))
            }
        </Wrapper>

    )
}

export default SkeletonCompo