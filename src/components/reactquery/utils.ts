export interface IPost {
    postId: string;
    userId: string;
    userName: string;
    title: string;
    content: string;
    star: number;
    createdAt: Date;
}

export const posts: IPost[] = [
    {
        postId: 'post1',
        userId: 'user1',
        userName: 'user11',
        title: 'post11',
        content: 'content1',
        star: 1,
        createdAt: new Date()
    },
    {
        postId: 'post2',
        userId: 'user2',
        userName: 'user22',
        title: 'post22',
        content: 'content2',
        star: 2,
        createdAt: new Date()
    },
    {
        postId: 'post3',
        userId: 'user3',
        userName: 'user33',
        title: 'post33',
        content: 'content3',
        star: 3,
        createdAt: new Date()
    }
]

export const getFakePosts = () => {
    return posts;
}