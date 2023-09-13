import Link from 'next/link'
import Button from '@/app/ui/button'
import { generateQueryString } from '@/app/lib/fetch'

interface Props {
    total: number
    page: number
    title?: string
    categoryId?: string
}

const LIMIT = 6

const Pagination = ({ total, page, title, categoryId }: Props) => {
    if (total <= LIMIT) return null

    const isPrevDisabled = page === 0
    const isNextDisabled = (page + 1) * LIMIT >= total

    const queryString = generateQueryString({ title, categoryId })

    return (
        <footer className={'my-12 flex justify-center gap-5'}>
            {isPrevDisabled ? (
                <Button disabled>Prev</Button>
            ) : (
                <Link
                    href={`/posts?page=${page - 1}${
                        queryString ? `&${queryString}` : ''
                    }`}
                    prefetch
                >
                    <Button>Prev</Button>
                </Link>
            )}
            {isNextDisabled ? (
                <Button disabled>Next</Button>
            ) : (
                <Link
                    href={`/posts?page=${page + 1}${
                        queryString ? `&${queryString}` : ''
                    }`}
                    prefetch
                >
                    <Button>Next</Button>
                </Link>
            )}
        </footer>
    )
}

export default Pagination
