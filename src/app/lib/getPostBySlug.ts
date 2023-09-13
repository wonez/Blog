import fetch from './fetch'
import { Post } from '@/app/api/models/Post'

export default async function getPostBySlug(slug: string): Promise<Post> {
    const res = await fetch(`postBySlug`, {
        slug,
    })

    if (!res.ok) {
        throw new Error('Failed to fetch post')
    }

    return res.json()
}
