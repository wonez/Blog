import { Post } from '@/app/api/models/Post'
import Card from '@/app/posts/card'

interface Props {
    posts: Post[]
}

export default function List({ posts }: Props) {
    if (posts.length === 0) {
        return <div className={'text-center'}>Nothing to show</div>
    }

    return (
        <section className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-3">
            {posts.map((post) => {
                return <Card post={post} key={post.id} />
            })}
        </section>
    )
}
