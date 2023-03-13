import { MicroCMSListContent, MicroCMSListResponse } from 'microcms-js-sdk'
import client from '../client'
import { Content } from '../types'


export default defineEventHandler(async (event) => {
    const data = client.getList<Content>({
        endpoint: 'blogs',
    })
    return data
})
//export default async (req: IncomingMessage, res: ServerResponse) => {
//}
