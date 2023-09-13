import { Post } from '@/app/api/models/Post'
import { Category } from '@/app/api/models/Category'

export interface Content {
    posts: Post[]
    categories: Category[]
}
