import { rest } from 'msw';

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
    })
]