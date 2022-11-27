import React, {useEffect, useState} from "react";
import {IPost} from "../../reactquery/utils";
import {usePosts} from "../../reactquery/query";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  //box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  border-radius: 4px;
  width: 20vw;
  height: 30vh;
`;

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

const ListSuspense: React.FC = () => {

    const [list, setList] = useState<IPost[]>([])

    const { data: postData, isLoading } = usePosts();
    console.log('listSuspense isLoading:', isLoading)

    useEffect(() => {
        if (postData) {
            setList(postData)
        }
    }, [postData])

    return(
        <>
            {
                postData?.map((post, index) => (<Item key={index} post={post} />))
            }
        </>
    )
}

export default ListSuspense