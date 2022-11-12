import {useQuery, UseQueryResult} from "react-query";
import {IPost} from "./utils";
import {AxiosError} from "axios";
import {getPost, getPosts, getPostsError, getPostsError400} from "./api";



export const usePosts = (): UseQueryResult<IPost[], AxiosError> => {
    // console.log('usePosts')
    return useQuery({
        queryKey: 'getPosts',
        queryFn: getPosts,
        onError: err => console.log('error!!:', err),
    })
}

export const usePost = (postId?: string, userId?: string): UseQueryResult<IPost, AxiosError> => {
    return useQuery({
        queryKey: ['getPost', postId, userId],
        queryFn: () => getPost(postId, userId),
        onError: error => console.log('error@:', error),
        enabled: !!postId && !!userId
    })
}