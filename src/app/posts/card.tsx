import { Post } from '@/app/api/models/Post'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    post: Post
}

export default function Card({ post }: Props) {
    const { imageUrl, slug, title, excerpt } = post

    return (
        <Link
            href={`/post/${post.slug}`}
            className={'hover:-translate-y-4 transition-transform'}
            prefetch
        >
            <div
                className={'border rounded-md shadow-md h-full overflow-hidden'}
            >
                <div className={'h-48 w-full relative'}>
                    <Image
                        className={''}
                        src={imageUrl}
                        alt={slug}
                        fill
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
                <div className={'p-6'}>
                    <p className={'text-gray-900 my-2 text-lg font-bold'}>
                        {title}
                    </p>
                    <p className={'text-gray-700 font-medium'}>{excerpt}</p>
                </div>
            </div>
        </Link>
    )
}
