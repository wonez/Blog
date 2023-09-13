import fetch from './fetch'
import { PostsPaged } from '@/app/api/models/Post'

export default async function getPosts(
    page?: string,
    title?: string,
    categoryId?: string
): Promise<PostsPaged> {
    const res = await fetch(`posts`, {
        page,
        title,
        categoryId,
    })

    if (!res.ok) {
        throw new Error('Failed to fetch posts')
    }

    return res.json()
}
