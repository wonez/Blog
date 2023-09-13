import {NextResponse} from "next/server";
import {getBlogContent} from "@/app/api/getBlogContent";

export async function GET() {

    const { categories } = await getBlogContent();

    return NextResponse.json(categories);
}