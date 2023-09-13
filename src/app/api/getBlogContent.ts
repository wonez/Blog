import path from 'path'
import { promises as fs } from 'fs'
import { Content } from '@/app/api/models/Content'

export async function getBlogContent() {
    const jsonPath = path.join(process.cwd(), 'json')

    return JSON.parse(
        await fs.readFile(jsonPath + '/blog.json', 'utf8')
    ) as Content
}
