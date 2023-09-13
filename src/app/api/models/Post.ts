export interface Post {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    imageUrl: string;
    categories: number[];
}

export interface PostsPaged {
    total: number;
    posts: Post[];
}