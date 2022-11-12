import { rest } from 'msw';


import {getFakePosts, posts} from "../components/reactquery/utils";
//npx msw init public/ --save
export const handlers = [
    rest.get('/imsi', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                data: 'hello'
            })
        )
    }),
    rest.get('/pro', (req, res, ctx) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    res(
                        ctx.status(200),
                        ctx.body(JSON.stringify({data: 'promise'}))
                    )
                )
            }, 3000)
        })
    }),
    rest.get('/post', (req, res, ctx) => {
        console.log('/post')
        return res(
            ctx.status(200),
            ctx.json({
                data: posts
            })
        )
    }),
    rest.get('/postError', (req, res, ctx) => {
        return res(
            ctx.status(500),
            ctx.json({
                err: 'error!'
            })
        )
    }),
    rest.get('/postsError400', (req, res, ctx) => {
        return res(
            ctx.status(400),
            ctx.json({
                error: 'error'
            })
        )
    })
]