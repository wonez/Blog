import getPostBySlug from '@/app/lib/getPostBySlug'
import getCategories from '@/app/lib/getCategories'
import Image from 'next/image'
import { Post } from '@/app/api/models/Post'
import { Category } from '@/app/api/models/Category'
import { redirect } from 'next/navigation'

export default async function Page({
    params: { slug },
}: {
    params: { slug: string }
}) {
    const postPromise = getPostBySlug(slug)
    const categoriesPromise = getCategories()
    let post = {} as Post
    let categories = [] as Category[]

    try {
        ;[post, categories] = await Promise.all([
            postPromise,
            categoriesPromise,
        ])
    } catch (err) {
        redirect('/posts')
    }

    const { imageUrl, title, excerpt, categories: categoryIds } = post

    return (
        <main>
            <div className={'max-w-2xl px-4 py-16 mx-auto'}>
                <Image
                    className={''}
                    src={imageUrl}
                    alt={slug}
                    width={700}
                    height={400}
                />
                <div className={'py-6'}>
                    <p className={'text-indigo-700 font-medium'}>
                        {categoryIds
                            .map(
                                (id) =>
                                    categories.find(
                                        (category) => category.id === id
                                    )?.name
                            )
                            .join(', ')}
                    </p>
                    <p className={'text-gray-900 my-2 text-lg font-bold'}>
                        {title}
                    </p>
                    <p className={'text-gray-700 font-medium'}>{excerpt}</p>
                </div>
            </div>
        </main>
    )
}
