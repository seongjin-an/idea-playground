import {useQuery, UseQueryResult} from "react-query";
import {IPost} from "./utils";
import {AxiosError} from "axios";
import {getPosts} from "./api";



export const usePosts = (): UseQueryResult<IPost[], AxiosError> => {
    console.log('usePosts')
    return useQuery({
        queryKey: 'getPosts',
        queryFn: () => getPosts()
    })
}