import { NextResponse } from 'next/server'
import { getBlogContent } from '@/app/api/getBlogContent'
import { PostsPaged } from '@/app/api/models/Post'

const DEFAULT_PAGE = 0
const LIMIT = 6

export async function GET(req: Request) {
    let { posts } = await getBlogContent()

    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get('page') || '') || DEFAULT_PAGE
    const categoryId = parseInt(searchParams.get('categoryId') || '')
    const title = searchParams.get('title')

    if (title) {
        posts = posts.filter((post) =>
            post.title.toLowerCase().includes(title.toLowerCase())
        )
    }

    if (categoryId) {
        posts = posts.filter((post) => post.categories.includes(categoryId))
    }

    const offset = page * LIMIT

    const response: PostsPaged = {
        total: posts.length,
        posts: posts.slice(offset, offset + LIMIT),
    }

    return NextResponse.json(response)
}
