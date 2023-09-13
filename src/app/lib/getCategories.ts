import fetch from './fetch'
import { Category } from '@/app/api/models/Category'

export default async function getCategories(): Promise<Category[]> {
    const res = await fetch('categories')

    if (!res.ok) {
        throw new Error('Failed to fetch categories')
    }

    return res.json()
}
