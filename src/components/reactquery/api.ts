import axios from "axios";
import {IPost} from "./utils";

export const getPosts = async (): Promise<IPost[]> => {
    const { data } = await axios.get('/post')
    return data;
}