export interface Category{
    id: number;
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
}
export interface Post{
    id: number;
    title: string;
    slug: string;
    image: string;
    image_url: string;
    summary: string;
    content: string;
    tags: string[];
    keywords: string[];
    breaking: boolean;
    published: boolean;
    category_id: number;
    category: Category;
    created_at: string;
    updated_at: string;
}