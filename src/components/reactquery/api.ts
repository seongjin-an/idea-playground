import axios from "axios";
import {IPost} from "./utils";

/**
 * handlers api ctx.json() 으로 설정된 것이 data
 */
export const getPosts = async (): Promise<IPost[]> => {
    const { data } = await axios.get('/post')
    // console.log('api getPosts:', data)

    return data.data;
}

export const getPost = async (postId?: string, userId?: string): Promise<IPost> => {
    const { data } = await axios.get('/post/' + postId + '/' + userId).catch(err => {
        throw new Error('not found')
    })
    console.log('api getPost...data:', data)
    return data.data
}

export const getPostsError = async (): Promise<IPost[]> => {
    console.log('getPostsError request')
    const { data } = await axios.get('/postError').catch(err => {
        console.log('err kind:', err)
        throw new Error('err!!!!!!')
    })
    console.log('api getPostError:', data)
    return data.data
}

export const getPostsError400 = async (): Promise<IPost[]> => {
    console.log('getPostsError request')
    const { data } = await axios.get('/postError400').catch(err => {
        console.log('err kind:', err)
        throw new Error('err!!!!!!')
    })
    console.log('api getPostError:', data)
    return data.data
}