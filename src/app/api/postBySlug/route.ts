import {NextResponse} from "next/server";
import {getBlogContent} from "@/app/api/getBlogContent";

export async function GET(req: Request) {
    const { posts } = await getBlogContent();

    const { searchParams } = new URL(req.url)
    const slug = searchParams.get('slug') || '';

    const post = posts.find(post => post.slug === slug)

    return NextResponse.json(post)
}