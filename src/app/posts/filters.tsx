'use client'

import Input from '@/app/ui/input'
import Button from '@/app/ui/button'
import Select from '@/app/ui/select'
import { Category } from '@/app/api/models/Category'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { generateQueryString } from '@/app/lib/fetch'

interface Props {
    categories: Category[]
    page?: string
    title?: string
    categoryId?: string
}

export default function Filters({ categories, title, categoryId }: Props) {
    const router = useRouter()

    const [search, setSearch] = useState('')

    const onSearchChange = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        setSearch(value)
    }

    const handleSearch = (e: FormEvent) => {
        e.preventDefault()
        router.push(
            `posts?${generateQueryString({
                title: search,
                categoryId,
            })}`
        )
    }

    useEffect(() => {
        setSearch(title || '')
    }, [title])

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        router.push(
            `posts?${generateQueryString({
                title: search,
                categoryId: value,
            })}`
        )
    }

    const selectedCategory = categoryId
        ? categories.find((category) => category.id == parseInt(categoryId))?.id
        : ''

    const categoryOptions = [
        { value: '', label: 'All Categories' },
        ...categories.map((category) => ({
            value: category.id,
            label: category.name,
        })),
    ]

    return (
        <section
            className={'my-5 flex justify-between flex-col gap-10 lg:flex-row'}
        >
            <div>
                <Select
                    value={selectedCategory}
                    onChange={handleSelect}
                    options={categoryOptions}
                />
            </div>
            <form onSubmit={handleSearch} className={'w-42 flex gap-3'}>
                <Input
                    value={search}
                    onChange={onSearchChange}
                    placeholder={'Search...'}
                />
                <Button type={'submit'}>Search</Button>
            </form>
        </section>
    )
}
