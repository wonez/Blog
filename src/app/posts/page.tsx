import Link from 'next/link'
import { Suspense } from 'react'
import Loading from '@/app/posts/loading'
import Posts from '@/app/posts/posts'

interface Props {
    searchParams: {
        page?: string
        title?: string
        categoryId?: string
    }
}

export default function Page({
    searchParams: { page, title, categoryId },
}: Props) {
    return (
        <main
            key={Math.random()}
            className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
        >
            <Link href={'/posts'}>
                <h2 className="text-2xl font-bold text-center text-gray-900">
                    From the blog
                </h2>
                <h2 className="text-md mt-1 text-center text-gray-700">
                    Blog by Faris Fazlic
                </h2>
            </Link>

            <Suspense fallback={<Loading />}>
                <Posts page={page} title={title} categoryId={categoryId} />
            </Suspense>
        </main>
    )
}
