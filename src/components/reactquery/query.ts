import {useQuery, UseQueryResult} from "react-query";
import {IPost} from "./utils";
import {AxiosError} from "axios";
import {getPosts, getPostsError, getPostsError400} from "./api";



export const usePosts = (): UseQueryResult<IPost[], AxiosError> => {
    console.log('usePosts')
    return useQuery({
        queryKey: 'getPosts',
        queryFn: getPostsError400,
        onError: err => console.log('error!!:', err),
    })
}