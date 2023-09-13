import getPosts from '@/app/lib/getPosts'
import getCategories from '@/app/lib/getCategories'
import { Post } from '@/app/api/models/Post'
import { Category } from '@/app/api/models/Category'
import Filters from '@/app/posts/filters'
import List from '@/app/posts/list'
import Pagination from '@/app/posts/pagination'

interface Props {
    page?: string
    title?: string
    categoryId?: string
}

export default async function Posts({ page, title, categoryId }: Props) {
    const postsPromise = getPosts(page, title, categoryId)
    const categoriesPromise = getCategories()

    let posts = [] as Post[]
    let total = 0
    let categories = [] as Category[]

    try {
        ;[{ posts, total }, categories] = await Promise.all([
            postsPromise,
            categoriesPromise,
        ])
    } catch (err) {
        throw Error('Ooops, Something went wrong!')
    }

    return (
        <>
            <Filters
                categories={categories}
                page={page}
                title={title}
                categoryId={categoryId}
            />

            <List posts={posts} />

            <Pagination
                total={total}
                page={parseInt(page || '0')}
                title={title}
                categoryId={categoryId}
            />
        </>
    )
}
